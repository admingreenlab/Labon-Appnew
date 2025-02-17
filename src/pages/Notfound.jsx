import React, { useEffect, useState } from 'react';
import { IonContent, IonImg, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonTabButton, IonBackButton } from '@ionic/react';
import { IonButtons, IonButton, IonModal, IonHeader, IonPage } from '@ionic/react';


const Notfound = () => {

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <h1 >404 - Page Not Found</h1>
            <p>The page you requested could not be found.</p>
            <ion-router-link href='/home' className="badge button --shutter --up d-block"
              style={{ width: "fit-content", margin: "auto", padding: '10px', color: '#fff', background: '#4c3226', display: 'block', marginTop: "20px" }}>
              Return to Homepage
            </ion-router-link>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Notfound;