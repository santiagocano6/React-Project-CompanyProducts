import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import NotMatch from './components/NotMatch';

function App() {
    return (
        <BrowserRouter>
            <div className="general">
                <Navbar/>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route exact path='/products' component={Products} />
                <Route path='/products/:category' component={Products} />
                <Route path='/clients' component={Clients} />
                <Route path='/contact' component={Contact} />
            </div>
        </BrowserRouter>
    );
}

export default App;
