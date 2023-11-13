import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Product from './component/Product';
import Navbar from './component/Navbar';
import { Provider } from 'react-redux';
import appStore from './Redux/AppStore';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Provider  store={appStore}>
      <div className="App">
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path="/product/:id" element={<DetailPage/>} />
        <Route path='/cart' element={<CartPage/>}/>

        

      </Routes>
     
    </div>
    </Provider>
    
  );
}

export default App;
