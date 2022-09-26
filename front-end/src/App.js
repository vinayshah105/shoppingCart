import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import FemaleProducts from './components/Women.js';
import MenProducts from './components/Men.js';
import SaleProducts from './components/Sale.js';
import CartScreen from './components/Cart.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/men' element={<MenProducts />} />
            <Route path='/female' element={<FemaleProducts />} />
            <Route path='/sale' element={<SaleProducts />} />
            <Route path='/cart' element={<CartScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
