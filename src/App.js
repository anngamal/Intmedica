// import logo from './cover.jpg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import RandomProduct from './components/ProductInfo/ProductList';
import CategoriesRouting from './components/Categories/CategoriesRouting';
import Mainvideo from './components/MainVideo/mainvideo';
import CategoriesImages from './components/CategoriesImages/CategoriesImages';
import HomePics from './components/Home3pics/HomePics';
import HomeSlider from './components/HomeSlider/HomeSlider';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductInfo/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SignIn from './components/Signin/Signin';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div id="catsAndvidDiv">
      <Mainvideo />
      <CategoriesRouting />
      </div>
      <CategoriesImages />
      <HomeSlider />
      <HomePics />
      
      <Footer />


     
    </div>
    
  );
}

export default App;
