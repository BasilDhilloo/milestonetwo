import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {Link, useLocation} from "react-router-dom"
import "./Header.css"
import { useEffect, useState } from 'react';
import logo from "./../../images/logo.png"

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Home")
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname === "/"){
            setActiveTab("Home")
        }else if(location.pathname === "/add"){
            setActiveTab("addUser")
        }else if(location.pathname === "/about"){
            setActiveTab("About")
        }
    },[location]);

    return (
        <div className='header'> 
            <img src={logo} className='logo' />
            <div className='header-right'> 
                <Link to="/">
                    <p
                    className={`${activeTab === "Home" ? "active" : ""}`}
                    onClick={() => setActiveTab("Home")}  
                > Home </p>
                </Link>
                <Link to="/add">
                    <p
                    className={`${activeTab === "addUser" ? "active" : ""}`}
                    onClick={() => setActiveTab("addUser")}  
                > Add Patient  </p>
                </Link>
                <Link to="/about">
                    <p
                    className={`${activeTab === "About" ? "active" : ""}`}
                    onClick={() => setActiveTab("About")}  
                > View </p>
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