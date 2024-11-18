import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';
import Anxiety from './Components/Anxiety';
import Stress from './Components/Stress';
import Ptsd from './Components/Ptsd';
//import Suicide from './Components/Suicide';
import Depression from './Components/Depression';
import BipolarDisorder from './Components/BipolarDisorder';
import Sleep from './Components/Sleep';
import Suicide from './Components/Suicide';
import Emotional from './Components/Emotional';
import Schizophrenia from './Components/Schizophrenia';
import FirebaseContextProvider from './utils/Firebase';

//import Addiction from './Components/Addiction';
//import  Emotional from './utils/Constant';
//import Addiction from './Components/Addiction';


//import reportWebVitals from './reportWebVitals';

const Applayout= ()=>{
  return(
    <div className="app">
     <Header/>
     <Outlet/>
     
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path: "/Anxiety",
        element: <Anxiety/>
      },
      {
        path:"/Depression",
        element:<Depression/>,
      },
      {
        path:"/BipolarDisorder",
        element:<BipolarDisorder/>,
      },
      {
        path:"/Stress",
        element:<Stress/>,
      },
      {
        path: "/Ptsd",
        element: <Ptsd/>
      },
      {
        path: "/Sleep",
        element: <Sleep/>
      },
      {
        path: "/Suicide",
        element: <Suicide/>
      },
      {
        path: "/Emotional",
        element: <Emotional/>
      },
      {
        path: "/Schizophrenia",
        element: <Schizophrenia/>
      }
      
      // {
      //   path: "/Suicide",
      //   element: <Suicide/>
      // },
      // {
      //   path: "/Addiction",
      //   element: <Addiction/>
      // },
      // {
      //   path: "/Emotional",
      //   element: <Emotional/>
      // }

      
    
      // {
      //   path:"/grocery",
      //   element:<Suspense fallback={<h1>Loading....</h1>} ><Grocery/></Suspense> 
      // }
    ],
    errorElement:<Error/>
  },
  
])
  
  

//export default Applayout;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContextProvider>
  <RouterProvider router={appRouter}>
    
    </RouterProvider>
  </FirebaseContextProvider>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
