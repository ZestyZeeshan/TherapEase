import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useProfileContext } from "./profileContext";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { 
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue
} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyA7JfTs_t9B_PMWuYosSECjM7l3btJXJms",
    authDomain: "tharapease.firebaseapp.com",
    projectId: "tharapease",
    storageBucket: "tharapease.appspot.com",
    messagingSenderId: "8496406680",
    appId: "1:8496406680:web:d9ffe1964b97cca34230ed"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firebaseStore = getFirestore(app);
const dataBase = getDatabase(app);
// export const fiebaseStorage = getStorage(app);

const firebaseContext = createContext({});
export const useFirebaseContext = () => useContext(firebaseContext);

const FirebaseContextProvider = (props) => {
 // const profileContext = useProfileContext();
 // const navigate = useNavigate();

  const authChanged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
     //   profileContext.userData({ displayName, email, uid, photoURL });
      } else {
      //  profileContext.userData({});
      }
    });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

       // navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        alert("Enter a valid gamil / password")
      });
  };

  const createNewUser = (
    email,
    password,
    name,
    mobile,
    designation,
    address
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&usqp=CAU",
        })
          .then(() => {
            const { displayName, email, uid, photoURL } = auth.currentUser;
           // profileContext.userData({ displayName, email, uid, photoURL });
            addDataToFireStore(
              displayName,
              email,
              uid,
              mobile,
              designation,
              address
            );
          })
          .catch((error) => {
            console.log(error);
          });

        sendEmailVerification(user).then(() => {
          alert("verification done");
          //navigate("/");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        // ..
      });
  };
  const addDataToFireStore = async (
    name,
    email,
    uid,
    mobile,
    designation,
    address
  ) => {
   
    const customDocId = name;
    const docRef = doc(firebaseStore, "staff", customDocId);
    return await setDoc(docRef, {
      username: name,
      email: email,
      uid: uid,
      designation: designation,
      mobile: mobile,
      address: address,
    });
  };

  const getUser = async (uid) => {
    const collectionRef = collection(firebaseStore, "staff");
    const q = query(collectionRef, where("uid", "==", uid));

    // Fetch the document
    return await getDocs(q);
  };

  //get image
  //  const getImageURL = (path)=>{
  //    return getDownloadURL(ref(fiebaseStorage,path));
  //  }

  const logout = () => {
    signOut(auth).then(() => {
    //  navigate("/login");
    });
  };
  
//   const addPatient = (id,name,weight,height,age,mobile,gender,dieases)=>{
//     set(ref(dataBase,`staff/${profileContext.user.displayName}/${id}`),{
//       id,
//       name,
//       weight,
//       height,
//       age,
//       mobile,
//       gender,
//       dieases
//     })
//   }

//   const getPatients = ()=>{
//       onValue(ref(dataBase,'staff'),(snapshot)=>{
//       // console.log( snapshot.val());
//       if(!profileContext.patientList){
//      //    profileContext.setPatient(snapshot.val())
//       }
      
//     })

//   };
    

  return (
    <firebaseContext.Provider
      value={{
        authChanged,
        login,
        createNewUser,
        logout,
        getUser,
        // getImageURL
       // addPatient,
       // getPatients
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};
export default FirebaseContextProvider;










