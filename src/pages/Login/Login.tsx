import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { loginUser } from '../../firebaseConfig';
import GetUser from '../GetUser/GetUser';
import Register from '../Register/Register';
import Header from '../Header/Header';
// import { toast } from '../toast';



const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  async function login(){
    const res = await loginUser(username, password)
    if(!res){
      console.log("Error logging with your credentials!")
    }else{
      return<Register />
    }
    // console.log(`${res ? "Login Success" : "Login Failed!"}` )
  }

  return (
    <IonPage>
      <IonHeader>
        <Header />
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput 
        placeholder='Username'
        onIonChange={( e: any) => setUsername(e.target.value)}
        />
      <IonInput 
        type='password'
        placeholder='Password'
        onIonChange={( e: any) => setPassword(e.target.value)}
        />
      <IonButton  onClick={login} routerLink="/startup">Log in</IonButton>
      <p>New User! <Link to="/register"> Register </Link></p>

      </IonContent>
    </IonPage>
  );
};

export default Login;