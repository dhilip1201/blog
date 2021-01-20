import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';
import Logo from './components/Logo';
import AboutUs from './containers/About_Us';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlog } from './actions';

function App() {

  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllBlog())
    }, [])



  return (

    <Router>
      <div className="App">
        <Logo />
        {/* <Header /> */}
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us"  component={AboutUs}/>
        <Route path="/contact-us"  component={ContactUS}/>
        <Route path="/post/:slug" component={Post} />
        <Route path="/post" component={Post} />
        
        
        </Switch>
        

        
      </div>
    </Router>
    
  );
}

export default App;
