import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './StartUp.css';
import homeImg from "../../images/homeImg.jpeg"
import Header from '../Header/Header';

const StartUp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Header />
        <IonToolbar>
          <IonTitle className='homeTitle'>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonImg src={homeImg}> </IonImg>
        <div className='button-padding'>
          <IonButton routerLink='/addRecord'> Add Record </IonButton>
          <IonButton routerLink='/getRecord'> Get Record </IonButton>

          <IonButton routerLink='/addUser' color='secondary' fill="solid"> Add User </IonButton>
          <IonButton routerLink='/getUser' color='secondary'  fill="solid"> Get User </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StartUp;
