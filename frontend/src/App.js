import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './routes/Home';
import ProductDesc from './routes/ProductDesc';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">{process.env.REACT_APP_LOGO_NAME}</Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product/:product_slug' element={<ProductDesc />}/>
          </Routes>
        </main>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
