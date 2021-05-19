import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/Navigations/Navbar";
import IndexPage from "./components/IndexPage/IndexPage";
import CategoryDetail from "./components/Category/CategoryDetail";
import PostDetail from "./components/Posts/PostDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

    return (
        <div className='App'>
            <Router>
                <MyNavbar />
                <Switch>
                    <Route path="/category/:id/" exact component={CategoryDetail} />
                    <Route path="/posts/:id/" exact component={PostDetail} />
                    <Route path="/" exact component={IndexPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
