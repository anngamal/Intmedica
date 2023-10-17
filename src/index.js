import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ErrorPage from './Pages/ErrorPage/ErrorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Contactus from './components/Contactus/Contactus';
import Signin from './components/Signin/Signin';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom'; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
    // errorElement: <ErrorPage />
  },
  {
    path: "/shop",
    element: <Shop />,
    // loader: cupsDataLoader,
  },
  {
    path: "/yourcart",
    element: <Cart />,
    // loader: trackDataLoader
  },
  {
    path: "/signin",
    element: <Signin />,
    // loader: singleTrackDataLoader
  },
  {
    path: "/contactus",
    element: <Contactus />,
    // loader: singleTrackDataLoader
  }
]);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
