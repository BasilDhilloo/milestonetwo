import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import { toast } from "react-toastify";

import 'firebase/compat/auth';
import 'firebase/compat/analytics';

//database connection variables
var config = {
    apiKey: "AIzaSyCkmePcx4YIGJtG8_FNP9XadUOLGdpKL6A",
    authDomain: "mapd722-project.firebaseapp.com",
    projectId: "mapd722-project",
    storageBucket: "mapd722-project.appspot.com",
    messagingSenderId: "747975564809",
    appId: "1:747975564809:web:31bb645d315ad69bcc22d8",
    measurementId: "G-L46WJRGBQT"
};

firebase.initializeApp(config)
const fireDb = firebase.database().ref()
//const dbref = firebase.database().ref('mapd722-project-default-rtdb/') 

export default fireDb;

export async function loginUser(username: string, password : string){
    const email = `${username}@mapd724.com`
    try{
        const res =   await firebase.auth().signInWithEmailAndPassword(email, password)
        toast("user loged in")
        console.log(res)
        return true
    }
    catch(error: any){
        toast(error.message)
        console.log(error)
        return false 
    }
}


export async function registerUser(username: string, password : string){
    const email = `${username}@mapd724.com`
    try{
        const res =   await firebase.auth().createUserWithEmailAndPassword(email, password)
        toast(res)
        return true
    }
    catch (error: any){
        toast(error.message)
        // console.log(error)
        return false 
    }
}

// export async function readFromDb(){
//     // Extract Firebase collection to array
//     dbref.on('value', resp => {
//         let data: any[] = snapshotToArray(resp)
  

//}