import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../Header/Header';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './AddUser.css';
import fireDb from "../../firebaseConfig"
import { toast } from "react-toastify";

const initialState = {
    name: "",
    email: "",
    contact: ""
}

const AddUser: React.FC = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
  
    const {name, email, contact} = state;

    const history = useHistory();

    
    const handleInputChange  = (e: any) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value})
    };


    //Need more work
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("Please enter your details")
        }else{
            fireDb.child("users").push(state, (err: any) => {
                if(err){
                    toast.error(err)
                }else{
                    toast.success("Contact Added Successfully")
                }
            });
            setTimeout(() => history.push("/"), 500);
        }
    };

  return (
    <IonPage>
      <IonHeader>
        <Header />
        <IonToolbar>
          <IonTitle>Add Patient Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{marginTop: "100px"}}>
            <form 
            style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
            onSubmit={handleSubmit}
            >
                <label htmlFor='name'>Name</label>
                <input 
                type="text"
                id="name"
                name="name"
                placeholder='Enter Your Name'
                value={name}
                onChange={handleInputChange}
                />

                <label htmlFor='email'>Email</label>
                <input 
                type="email"
                id="email"
                name="email"
                placeholder='Enter Your Email'
                value={email}
                onChange={handleInputChange}
                />

                <label htmlFor='contact'>Contact</label>
                <input 
                type="number"
                id="contact"
                name="contact"
                placeholder='Enter Your Contact#'
                value={contact}
                onChange={handleInputChange}
                />

                <input type="submit" value="Save" />
            </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddUser;