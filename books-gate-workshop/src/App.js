import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './styles/bootstrap.min.css';
import './styles/one-page-wonder.min.css';

import Home from "./components/pages/Home";
import LoginPage from "./components/user/login-logout/LoginPage";
import Logout from "./components/user/login-logout/Logout";
import SingUpPage from "./components/user/singup/SingUpPage";
import BookStorePage from "./components/store/BookStorePage";
import AddBookPage from "./components/admin/AddBookPage";
import DeleteBook from "./components/admin/DeleteBook";
import ContactPage from "./components/contact/ContactPage";
import AboutUsPage from "./components/about/AboutUsPage";
import BookDetailsPage from "./components/books/details/BookDetailsPage";
import EditBookPage from "./components/admin/EditBookPage";
import AddProductToCart from "./components/user/cart/AddProductToCart";
import MyCartPage from "./components/user/cart/MyCartPage";
import WishListPage from "./components/user/wish-list/WishListPage";
import MyAccountPage from "./components/user/account/MyAccountPage";
import DeleteProductFromCart from "./components/user/cart/DeleteProductFromCart";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route path='/' exact component={Home}/>
        <Route path='/singup' exact component={SingUpPage}/>
        <Route path='/login' exact component={LoginPage}/>
        <Route path='/logout' exact component={Logout}/>
        <Route path='/home/store' exact component={BookStorePage}/>
        <Route path='/home/store/admin/addbook' exact component={AddBookPage}/>
        <Route path='/books/delete/:id' exact component={DeleteBook}/>
        <Route path='/books/details/:id' exact component={BookDetailsPage}/>
        <Route path='/home/contact' exact component={ContactPage}/>
        <Route path='/home/about' exact component={AboutUsPage}/>
        <Route path='/books/edit/:id' exact component={EditBookPage}/>
        <Route path='/user/cart/add/:id' exact component={AddProductToCart}/>
        <Route path='/user/cart/delete/:id' exact component={DeleteProductFromCart}/>

        <Route path='/user/cart' exact component={MyCartPage}/>
        <Route path='/user/wishlist' exact component={WishListPage}/>
        <Route path='/user/account' exact component={MyAccountPage}/>

      </div>
    );
  }
}

export default App;
