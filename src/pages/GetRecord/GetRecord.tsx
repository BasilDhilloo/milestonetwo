import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState  ,useEffect } from 'react';
import Header from '../Header/Header';
import './GetRecord.css';
import fireDb from '../../firebaseConfig';
import { Link } from 'react-router-dom';


const GetRecord: React.FC = () => {
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
                <th style={{textAlign: "center"}}> BPressure </th>
                <th style={{textAlign: "center"}}> ResRate </th>
                <th style={{textAlign: "center"}}> BOxygen </th>
                <th style={{textAlign: "center"}}> HBRate </th>
              </tr>
            </thead>
            <tbody>
             
              <tr>
                  <th> 1 </th>
                  <td> 23gh</td>
                  <td> 23gh</td>
                  <td> 23gh</td>
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
                  <td> 23gh</td>
                  <td> 23gh</td>
                  <td> 23gh</td>
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
                  <td> 23gh</td>
                  <td> 23gh</td>
                  <td> 23gh</td>
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
                  <td> 23gh</td>
                  <td> 23gh</td>
                  <td> 23gh</td>
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

export default GetRecord;
