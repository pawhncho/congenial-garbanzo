import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main.js';
import Home from './components/Home.js';
import Product from './components/Product.js';

import './styles/main.css';
import './styles/home.css';
import './styles/product.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path='/product/' element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;