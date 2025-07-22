// import React, { useState, useContext, createContext, useEffect } from 'react';
// import { IonContent, IonLabel, IonItem, IonImg, IonTitle, IonSelect, IonSelectOption, IonPopover, IonLoading, IonList, IonToolbar, IonCol, IonGrid, IonRow, IonTabButton, IonRefresher, IonRefresherContent } from '@ionic/react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import '../pages/Tab1.css';
// import '../main';
// import Header from './head';
// import { IonButtons, IonButton, IonModal, IonHeader, IonPage } from '@ionic/react';
// import { IMG_PATH } from "../config";
// import jwtAuthAxios from "../service/jwtAuth";
// import Head from './head';
// import { useMargin } from "../context/Margincontext";


// const Marginpage = () => {
//   const [popoverOpen, setPopoverOpen] = useState(false);
//   const { selectedMargin, marginValue, margins, loading, updateMargin } = useMargin();

//   const handlePopoverToggle = (event) => {
//     setPopoverOpen(!popoverOpen);
//   };

//   // Handle margin selection
//   const handleMenuItemClick = (margin) => {
//     const marginId = margin._id;
//     const marginName = margin.groupName;
//     updateMargin(marginId, marginName);
//     setPopoverOpen(false);
//   };





//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonLabel slot="start">Margin Page</IonLabel>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent className="ion-padding">

//         {/* Margin Selection Popover */}
//         <IonPopover
//           isOpen={popoverOpen}
//           onDidDismiss={() => setPopoverOpen(false)}
//           cssClass="popover-content"
//         >
//           <IonList>
//             {loading ? (
//               <IonItem>
//                 <IonLabel>Loading...</IonLabel>
//               </IonItem>
//             ) : margins?.length === 0 ? (
//               <IonItem>
//                 <IonLabel>No margins available</IonLabel>
//               </IonItem>
//             ) : (
//               margins?.map((margin) => {
//                 return (
//                   <IonItem
//                     key={margin._id}
//                     button
//                     onClick={() => handleMenuItemClick(margin)}
//                     lines="full"
//                   >
//                     <IonLabel>{margin.groupName}</IonLabel>
//                   </IonItem>
//                 );
//               })
//             )}
//           </IonList>
//         </IonPopover>

//         <IonGrid>
//           <IonRow>
//             <IonCol size="12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <div style={{ color: 'rgb(76 50 38)', fontSize: '15px' }}>
//                 {selectedMargin ? `${marginValue} (Selected)` : 'No margin selected'}
//               </div>

//               {/* IonSelect for Margin */}
//               <IonSelect
//                 value={selectedMargin}
//                 onIonChange={(e) => {
//                   const selectedMarginId = e.detail.value;
//                   const selectedMarginName = margins.find(margin => margin._id === selectedMarginId)?.groupName || '';
//                   updateMargin(selectedMarginId, selectedMarginName); 
//                 }}
//                 style={{
//                   marginLeft: 'auto',
//                   display: 'flex',
//                   color: '#4c3226',
//                   border: '2px solid #9d7664',
//                   width: 'auto',
//                   padding: '0 10px',
//                   borderRadius: '9px',
//                 }}
//               >
//                 {margins?.map((margin) => (
//                   <IonSelectOption key={margin._id} value={margin._id}>
//                     {margin.groupName}
//                   </IonSelectOption>
//                 ))}
//               </IonSelect>

//             </IonCol>
//           </IonRow>
//         </IonGrid>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Marginpage;