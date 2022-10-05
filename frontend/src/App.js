import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './routes/Footer';
import Home from './routes/Home';
import NavMenu from './routes/NavMenu';
import ProductDesc from './routes/ProductDesc';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavMenu />
        <main>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/product/:product_slug' element={<ProductDesc />}/>
            </Routes>
        </main>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
