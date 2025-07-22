import React, { useState, useContext, createContext, useEffect } from 'react';
import jwtAuthAxios from "../service/jwtAuth";

export const MarginContext = createContext();

// Context Provider Component
 const MarginProvider = ({ children }) => {
    const getInitialMargin = () => {
        if (typeof window !== 'undefined') {
            const savedMargin = localStorage.getItem('selectedMargin');
            const savedMarginValue = localStorage.getItem('marginValue');
            return {
                marginId: savedMargin || '',
                marginName: savedMarginValue || ''
            };
        }
        return { marginId: '', marginName: '' };
    };
    
    

    const [selectedMargin, setSelectedMargin] = useState(getInitialMargin().marginId);
    const [marginValue, setMarginValue] = useState(getInitialMargin().marginName);
    const [margins, setMargins] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch margins from API
    const fetchMargins = async () => {
        try {
            setLoading(true);
            const response = await jwtAuthAxios.get('client/getmargins'); // Adjust URL as needed
            const data = response.data;
            setMargins(data.salesmanshowmargin);

            // Set default selection to first margin if available
           if (data.salesmanshowmargin.length > 0) {
                const initialMargin = getInitialMargin();
                if (!initialMargin.marginId) {
                    const firstMargin = data.salesmanshowmargin[0];
                    updateMargin(firstMargin, firstMargin);
                }
            }
        } catch (error) {
            console.error('Error fetching margins:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const auth = localStorage.getItem('token');
        if (auth) {
            fetchMargins();
        }
    }, []);

    const updateMargin = (marginId, marginName) => {
        setSelectedMargin(marginId);
        setMarginValue(marginName);
        // Save to localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedMargin', marginId);
            localStorage.setItem('marginValue', marginName);
        }
    };
    
    const refreshMargins = () => {
        fetchMargins();
    };



    return (
        <MarginContext.Provider value={{
            selectedMargin,
            marginValue,
            margins,
            loading,
            updateMargin,
            refreshMargins
        }}>
            {children}
        </MarginContext.Provider>
    );
};

// Custom hook to use margin context
export const useMargin = () => {
    const context = useContext(MarginContext);
    if (!context) {
        throw new Error('useMargin must be used within a MarginProvider');
    }
    return context;
};

export default MarginProvider;
