import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {Link, useLocation} from "react-router-dom"
import "./Header.css"
import { useEffect, useState } from 'react';
import logo from "./../../images/logo.png"

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Home")
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname === "/startUp"){
            setActiveTab("startUp")
        }else if(location.pathname === "/addUser"){
            setActiveTab("addUser")
        }else if(location.pathname === "/getUser"){
            setActiveTab("getUser")
        }else if(location.pathname === "/addRecord"){
            setActiveTab("addRecord")
        }else if(location.pathname === "/getRecord"){
            setActiveTab("getRecord")
        }
    },[location]);

    return (
        <div className='header'> 
            <img src={logo} className='logo' />
            <div className='header-right'> 
                <Link to="/startUp">
                    <p
                    className={`${activeTab === "Home" ? "active" : ""}`}
                    onClick={() => setActiveTab("Home")}  
                > Home </p>
                </Link>
                <Link to="/addUser">
                    <p
                    className={`${activeTab === "addUser" ? "active" : ""}`}
                    onClick={() => setActiveTab("addUser")}  
                > Add Patient  </p>
                </Link>
                <Link to="/getUser">
                    <p
                    className={`${activeTab === "getUser" ? "active" : ""}`}
                    onClick={() => setActiveTab("getUser")}  
                > Get User </p>
                </Link>
                <Link to="/addrecord">
                    <p
                    className={`${activeTab === "addRecord" ? "active" : ""}`}
                    onClick={() => setActiveTab("addRecord")}  
                > Add Record </p>
                </Link>
                <Link to="/getRecord">
                    <p
                    className={`${activeTab === "getRecord" ? "active" : ""}`}
                    onClick={() => setActiveTab("getRecord")}  
                > Get Record </p>
                </Link>
            </div>
        </div>
        // <IonPage>
        // <IonHeader>
        //     <IonToolbar>
        //     <IonTitle>Header</IonTitle>
        //     </IonToolbar>
        // </IonHeader>
        // <IonContent fullscreen>
        //     <IonHeader collapse="condense">
        //     <IonToolbar>
        //         <IonTitle size="large">Blank</IonTitle>
        //     </IonToolbar>
        //     </IonHeader>
        // </IonContent>
        // </IonPage>
    );
    };

export default Header;