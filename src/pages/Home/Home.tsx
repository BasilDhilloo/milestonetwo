import { IonButton, IonContent, IonFooter, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import homeImg from "./../../images/homeImg.jpeg"
import Header from '../Header/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Header />
        <IonToolbar>
          <IonTitle className='homeTitle'>We Care!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonImg src={homeImg}> </IonImg>
        <div className='button-padding'>
          <IonButton routerLink='/login'> Login </IonButton>
          <IonButton routerLink='/register' color='secondary'> Register </IonButton>
        </div>
      </IonContent>
  
    </IonPage>
  );
};

export default Home;
