import React, { useEffect, useRef, useState } from 'react';
import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    IonToast
} from '@ionic/react';
import { IonInput } from '@ionic/react';
import { IonInputPasswordToggle } from '@ionic/react';
import jwtAuthAxios, { setAuthToken } from "../service/jwtAuth";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Resetpassord = () => {
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const history = useHistory();

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');



    const handleResetPassword = async (e) => {
        e.preventDefault(); 
        setLoading(true); 
        try {
          const response = await jwtAuthAxios.post("client/resetpassword", {
            token: token,
            newPassword
          });
          if (response.status === 200) {
            setToastMessage(response?.data?.message);
            setShowToast(true);
            history.push("/login");
          }
        } catch (error) {
          console.error(error?.response?.data || "Error resetting password");
        } finally {
          setLoading(false); 
        }
      };


    return (
        <>
            <IonPage>
                <div className='main-bg' style={{ width: '100%', height: '100%' }}>
                    <img
                        className='freem253'
                        src="/img/logoa12.png"
                    ></img>
                    <div style={{ width: '100%', height: '30px', background: '#4c3226', position: 'absolute', left: ' 0', top: '0' }}></div>
                    <img
                        className='freemlogin1'
                        src="/img/freemlogin.svg"
                    ></img>
                    <div className='user-img'>
                        <IonImg
                            className='freemlogin2'
                            src="/img/userlogo.svg"
                        ></IonImg>
                        <div class="cell smaldesignleft">
                            <div class="circle fade-in-left">
                                <img
                                    src="/img/leftdesign.svg"
                                ></img>
                            </div>
                        </div>
                        <div class="cell smaldesignright">
                            <div class="circle fade-in-left">
                                <img
                                    src="/img/rightdesign.svg"
                                ></img>
                            </div>
                        </div>

                    </div>
                    <IonGrid>
                        <IonRow className='loginrow'>
                            <IonCol size-md='6' size-sm='8' size='12'>
                            <form onSubmit={handleResetPassword}>
                                <div style={{ display: 'flex' }}>
                                    <IonInput
                                        name="password"
                                        type="password"
                                        placeholder="Enter New Password"
                                        color='secondary'
                                        style={{ background: '#ffdeb300', color: '#000' }}
                                        slot="start"
                                        value={newPassword}
                                        onBlur={(e) => setNewPassword(e.target.value)}
                                        required
                                        fill="clear"
                                    >
                                        <IonInputPasswordToggle style={{ padding: '0' }} slot="start" fill='clear' color='secondary'></IonInputPasswordToggle>
                                    </IonInput>
                                </div>
                                <IonButton
                                    color='secondary'
                                    type='submit'
                                    expand="full"
                                    style={{ marginTop: '25px', width: '100%', textTransform: 'uppercase' }}
                                    // disabled={loading}
                                >
                                      {loading ? "Resetting..." : "Reset Password"}
                                </IonButton>
                                </form>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonPage>
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={2000}
            />
        </>
    );
}

export default Resetpassord;