import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState  ,useEffect } from 'react';
import Header from '../Header/Header';
import './GetUser.css';
import fireDb from '../../firebaseConfig';
import { Link } from 'react-router-dom';


// // Milestone-4

const GetUser: React.FC = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("users").on("value", (snapshot) => {
      if(snapshot.val() !== null){
        setData({ ...snapshot.val()});
      } else{
        setData({});
      }
    });

    return() => {
      setData({});
    };
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <Header />
        {/* <IonToolbar>
          {/* <IonTitle>Dashboard</IonTitle> 
        </IonToolbar> */}
      </IonHeader>
      <IonContent fullscreen>
        <div style={{marginTop: "10px"}}>
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{textAlign: "center"}}> No. </th>
                <th style={{textAlign: "center"}}> Name </th>
                <th style={{textAlign: "center"}}> Email </th>
                <th style={{textAlign: "center"}}> Contact </th>
                <th style={{textAlign: "center"}}> Action </th>
              </tr>
            </thead>
            <tbody>
             
              <tr>
                  <th> 1 </th>
                  <td> Basil</td>
                  <td> basil@gmail.com</td>
                  <td> 36876876873</td>
                  <td>
                    {/* <Link to={`/update/${id}`}> */}
                    <Link to={`/update`}>
                      <button  className='btn btn-edit'> Edit </button>
                    </Link>
                    <button  className='btn btn-delete'> Delete </button>
                    <Link to={`/view`}>
                      <button  className='btn btn-view'> View </button>
                    </Link>
                  </td>
              </tr>
              <tr>
                  <th> 2 </th>
                  <td> Mathew</td>
                  <td> MAthew@gmail.com</td>
                  <td> 467362783</td>
                  <td>
                    {/* <Link to={`/update/${id}`}> */}
                    <Link to={`/update`}>
                      <button  className='btn btn-edit'> Edit </button>
                    </Link>
                    <button  className='btn btn-delete'> Delete </button>
                    <Link to={`/view`}>
                      <button  className='btn btn-view'> View </button>
                    </Link>
                  </td>
              </tr>
              <tr>
                  <th> 3 </th>
                  <td> Joe</td>
                  <td> joe@gmail.com</td>
                  <td> 3010193183</td>
                  <td>
                    {/* <Link to={`/update/${id}`}> */}
                    <Link to={`/update`}>
                      <button  className='btn btn-edit'> Edit </button>
                    </Link>
                    <button  className='btn btn-delete'> Delete </button>
                    <Link to={`/view`}>
                      <button  className='btn btn-view'> View </button>
                    </Link>
                  </td>
              </tr>
              <tr>
                  <th> 4 </th>
                  <td> Rina</td>
                  <td> rina@gmail.com</td>
                  <td> 46246526846</td>
                  <td>
                    {/* <Link to={`/update/${id}`}> */}
                    <Link to={`/update`}>
                      <button  className='btn btn-edit'> Edit </button>
                    </Link>
                    <button  className='btn btn-delete'> Delete </button>
                    <Link to={`/view`}>
                      <button  className='btn btn-view'> View </button>
                    </Link>
                  </td>
              </tr>
            </tbody>
          </table>  
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GetUser;