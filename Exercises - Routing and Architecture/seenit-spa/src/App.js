import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import './styles/site.css';

import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Notification from "./components/common/Notification";
import Catalog from "./components/catalog/Catalog";
import Logout from "./components/user/Logout";
import Footer from "./components/common/Footer";
import CreatePage from "./components/post/CreatePage";
import EditPage from "./components/post/EditPage";
import DeletePost from "./components/post/DeletePost";
import DetailsPage from "./components/details/DetailsPage";
import UserPostsPage from "./components/post/UserPostsPage";
import DeleteComment from "./components/details/DeleteComment";

class App extends Component {
    render() {
        return (
            <div className="App" id="container">
                <Header/>
                <div className="content">
                    <Notification/>

                    <Route path='/' exact component={Home}/>
                    <Route path='/catalog' exact component={Catalog}/>
                    <Route path='/logout' exact component={Logout}/>
                    <Route path='/create' exact component={CreatePage}/>
                    <Route path='/edit/:id' exact component={EditPage}/>
                    <Route path='/delete/:id' exact component={DeletePost}/>
                    <Route path='/details/:id' exact component={DetailsPage}/>
                    <Route path='/myPosts' exact component={UserPostsPage}/>
                    <Route path='/delete/comments/:id' exact component={DeleteComment}/>

                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
