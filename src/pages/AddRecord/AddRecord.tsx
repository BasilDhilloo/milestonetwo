import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../Header/Header';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './AddRecord.css';
import fireDb from "../../firebaseConfig"
import { toast } from "react-toastify";

const initialState = {
    bloodPressure: "",
    respiratoryRate: "",
    bloodOxygen: "",
    heartBeatRate: ""
}

const AddRecord: React.FC = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
  
    const {bloodPressure, respiratoryRate, bloodOxygen, heartBeatRate} = state;

    const history = useHistory();

    
    const handleInputChange  = (e: any) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value})
    };


    //Need more work
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(!bloodPressure || !respiratoryRate || !bloodOxygen || !heartBeatRate){
            toast.error("Please enter a value for all details")
        }else{
            fireDb.child("records").push(state, (err: any) => {
                if(err){
                    toast.error(err)
                }else{
                    toast.success("Record Added Successfully")
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
          <IonTitle>Add Medical Record</IonTitle>
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
                <label htmlFor='bPressure'>Blood Pressure </label>
                <input 
                type="text"
                id="bPressure"
                name="bPressure"
                placeholder='Enter Your Name'
                value={bloodPressure}
                onChange={handleInputChange}
                />

                <label htmlFor='rRate'>Respiratory Rate </label>
                <input 
                type="text"
                id="rRate"
                name="rRate"
                placeholder='Enter Your Email'
                value={respiratoryRate}
                onChange={handleInputChange}
                />

                <label htmlFor='bOxygen'>Blood Oxygen </label>
                <input 
                type="text"
                id="bOxygen"
                name="bOxygen"
                placeholder='Enter Your Contact#'
                value={bloodOxygen}
                onChange={handleInputChange}
                />
                
                <label htmlFor='hbRate'>HeartBeatRate</label>
                <input 
                type="text"
                id="hbRate"
                name="hbRate"
                placeholder='Enter Your Contact#'
                value={heartBeatRate}
                onChange={handleInputChange}
                />
                <input type="submit" value="Save" />
            </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddRecord;