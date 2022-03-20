import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '../toast';
import './Register.css';
import { registerUser } from '../../firebaseConfig';
import Header from '../Header/Header';

const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  async function register(){
    console.log("Register Function! Starts ")

    if(password !== cpassword){
      console.log("Password Does Not Match!")
    }
    if(username.trim() === '' || password.trim() === ''){
      return toast('Username and password are required!', 4000)
    }
    const res = await registerUser(username, password )
  }

  return (
    <IonPage>
      <IonHeader>
      <Header />
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput 
        placeholder='Username'
        onIonChange={( e: any) => setUsername(e.target.value)}
        />
      <IonInput 
        placeholder='Password'
        onIonChange={( e: any) => setPassword(e.target.value)}
        />
        <IonInput 
        placeholder='Confirm Password'
        onIonChange={( e: any) => setCpassword(e.target.value)}
        />
      <IonButton onClick={register}routerLink="/startup"> Register </IonButton>
      <p>Already have an account! <Link to="/login"> Login </Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;