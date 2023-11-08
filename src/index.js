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
import ProductList from './components/ProductInfo/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import SignUp from './components/Signin/Signup';
import SearchByCatImgs from './components/SearchByCategory/SearchByCatImgs';
import SearchByCatList from './components/SearchByCategory/SearchByCatList';
import SearchByCatCard from './components/SearchByCategory/SearchByCatCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    // errorElement: <ErrorPage />
  },
  {
    path: "/shop",
    element: <Shop />,
    // loader: <RandomProduct />,
  },
  {
    path: "/yourcart",
    element: <Cart />,
    // loader: trackDataLoader
  },
  {
    path: "/signin",
    element:<><Navbar /><Signin /> <Footer /></> ,
    // loader: singleTrackDataLoader
  },
  {
    path:"/signup",
    element:<><Navbar /><SignUp /> <Footer /></> ,
  },
  {
    path: "/contactus",
    element: <><Navbar /><Contactus /><Footer /></> ,
    // loader: singleTrackDataLoader
  },
  {
    path:"/gymmachines",
    element:<><Navbar /><ProductList /> <Footer /></>,
  },
  {
    path:"/product/:id",
    element:<><Navbar /><ProductDetails /></>,
  },
  {
    path:"/searchbycategory",
    element:<><Navbar /><SearchByCatImgs /></>,
  },
  {
    path:"/category/:category",
    element:<><Navbar /> <SearchByCatList/>  </>
  }

]);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
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
