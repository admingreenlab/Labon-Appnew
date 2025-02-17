import React, { useContext, useEffect, useState, useMemo, useRef } from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
// import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonSearchbar,
  IonRow,
  IonCol,
  IonButton
} from '@ionic/react';
import { useHistory } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import Header from './head';
import jwtAuthAxios from "../service/jwtAuth";

const LibraryPage = () => {
  const [categorySuggestions, setCategorySuggestions] = useState([]);
  const [searchName, setSearchName] = useState();
  // const navigate = useNavigate();
  const history = useHistory();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await jwtAuthAxios.get(`master/items?name=${searchName}`);
      history.push( `/product/${response?.data[0]?._id ? response?.data[0]?._id : ""}`)
      setSearchName("");
    } catch (error) {
      console.error(error?.response?.data?.error);

    }
  };

  

  return (
    <>
      <Header />
      <IonContent>
        <IonRow>
          <IonCol>
            <div>
              <IonCard style={{
                marginBottom: '20px',
                marginTop: '110px'
              }}>
                <IonCardHeader className='maindheadider' style={{ backgraount: '#a97550' }}>
                  <IonCardTitle> Search </IonCardTitle>
                </IonCardHeader>
                <IonCardContent style={{ paddingLeft: '0', paddingRight: '0', height: '100vh' }}>
                  <form onSubmit={handleSearch} >
                    <div className="search">
                      <input
                        style={{ border: '0', width: '100%' }}
                        type="text"
                        placeholder="Type your search Name..."
                        value={searchName}
                        onChange={(e) => setSearchName(e?.target?.value?.toUpperCase())}

                      />
                      <span style={{ position: 'absolute', top: '13px', right: '36px', fontSize: '18px' }}><ion-icon name="search-outline"></ion-icon></span>
                    </div>
                  </form>
                </IonCardContent>
              </IonCard>
            </div>
          </IonCol>
        </IonRow>

      </IonContent>
    </>
  );
};

export default LibraryPage;
