import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import RandomProduct from './components/randomProduct';
import CategoriesRouting from './components/Categories/CategoriesRouting';
import Mainvideo from './components/MainVideo/mainvideo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainvideo />
      <CategoriesRouting />
      {/* <RandomProduct /> */}
    </div>
  );
}

export default App;
