import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Header from './pages/Header/Header';
import AddUser from './pages/AddUser/AddUser';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <ToastContainer position='top-center' />
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/login"> <Login /> </Route>
        <Route exact path="/register"> <Register /> </Route>
        <Route exact path="/dashboard"> <Dashboard /> </Route>
        <Route exact path="/add"> <AddUser /> </Route>
        <Route exact path="/about"> <Dashboard /> </Route>
    
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
