import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState  ,useEffect } from 'react';
import Header from '../Header/Header';
import './GetUser.css';
import fireDb from '../../firebaseConfig';
import { Link } from 'react-router-dom';


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
              {Object.keys(data).map((id, index) => {
                return (
                  <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      {/* <td> {data[id].name}</td>
                      <td> {data[id].email}</td>
                      <td> {data[id].contact}</td> */}
                  </tr>
                );
              })}
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

//  import { IonContent, 
//   IonHeader, 
//   IonPage, 
//   IonTitle, 
//   IonToolbar, 
//   IonCard,
//   IonCardHeader,
//   IonCardTitle,
//   IonCardContent,
//   IonGrid,
//   IonRow,
//   IonCol,
//   IonBackButton,
//   IonButtons,
//   IonItem,
//   IonLabel,
//   IonList,
//   IonLoading
//  } from '@ionic/react';
// import React, { useState, useEffect } from 'react';
// import firebase from '../Firebase';
// import Header from '../Header/Header';
// import { useHistory, useParams } from 'react-router-dom';
// import './AddUser.css';
// import fireDb from "../../firebaseConfig"
// import { toast } from "react-toastify";
// import "firebase/compat/database";
// import './List.css';
// import { listenerCount } from 'process';

// const initialState = {
//   name: "",
//   email: "",
//   contact: ""
// }
// const Dashboard: React.FC = () => {
// //variables

// const [data, setData] = useState<any[]>([])
// const [showLoading, setShowLoading] = useState(true);
// const dbref = firebase.database().ref()

// // const [state, setState] = useState(initialState);
// // var [data, setData] = useState({});

// //const {name, email, contact} = state;

// //load data
// const loadData = () => {
//   // Extract Firebase collection to array
//  dbref.on('users', (resp: any) => {
//    let cases = snapshotToArray(resp)

//    let allUsers: any[] = []
//    cases.reduce((res,patient) =>{
//    cases.reduce((res: { [x: string]: { recovered: any; }; }, patient: {name: any; email: any; contact: any; }) => {
//    })

//      if (!res[patient.name]) {
//        res[patient.name] = {name: "", email: "", contact: "" };
//        bycountry.push(res[patient.country])
//      }
//      res[patient].name = patient.name;
//      res[patient.name].deaths += patient.deaths;
//      res[patient.name].recovered += patient.recovered;
//      return res;
//    }, {});
//    setData(bycountry)
//    setShowLoading(false);
//  });
// }

// const snapshotToArray = (snapshot: any) => {
//   const returnArr: any[] = []

//   snapshot.forEach((childSnapshot: any) => {
//     const item = childSnapshot.val()
//     item.key = childSnapshot.key
//     returnArr.push(item)
//   });

//   return returnArr;
// }


// useEffect(() => {
//   loadData()
// }, [])

// //Need more work
// // const handleSubmit = (e: any) => {
// //   e.preventDefault();

// //   data = fireDb.child("users").get();
  
// // };

// return (
//   <IonPage>
//     <IonHeader>
//       <IonToolbar>
//         <IonTitle>List of Countries</IonTitle>
//       </IonToolbar>
//     </IonHeader>

//     <IonContent>
//       {/* <IonLoading
//           isOpen={showLoading}
//           onDidDismiss={() => setShowLoading(false)}
//           message={'Loading...'}
//       /> */}
//       <IonList>
//         {data.map((item, idx) => (
//           <IonItem key={idx}>
//             <IonLabel>
//               <h2>{item.users}</h2>
//               <h3>Cases: {item.name}</h3>
//               <h3>Deaths: {item.email}</h3>
//               <h3>Recovered: {item.contact}</h3>
//             </IonLabel>
//           </IonItem>
//         ))}
//       </IonList>
//     </IonContent>

//   </IonPage>
// );

// };


// export default Dashboard;


























// function initialState(initialState: any): [any, any] {
//   throw new Error('Function not implemented.');
// }
