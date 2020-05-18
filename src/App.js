import React from 'react';
import {BrowserRouter as Router,Route, Link,} from "react-router-dom";
import CartIcon from './components/CartIcon'

//componnet
import Home from './pages/Home'
import Produits from './pages/Produits'
import Cart from './pages/Cart'
import Produit from './pages/Produit'



function App() {
  return (
    <Router>
    <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">maganaStore</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/produits">Produit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
       
        </div>
        <CartIcon />
      </nav>



      <Route path='/' component={Home} exact />
      <Route path='/produits' component={Produits} exact />
      <Route path='/produits/:id' component={Produit}/>
      <Route path='/cart' component={Cart}/>

    </div>
    </Router>
  );
}

export default App;
