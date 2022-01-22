import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Footer from './Footer';



 const Routing=()=>{
     return(
         <BrowserRouter>
         <div>
         </div>
         <Route  path="/" component={Home}/>
         <Route  path= "/post"component={Post}/>     
         <Route  path="/profile" component={Profile}/>   
       
         <Footer/>
         </BrowserRouter>

     )
 }
 export default Routing;