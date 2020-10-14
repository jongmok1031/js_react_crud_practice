import React from 'react';
import {Nav} from './components' 

import {Board,Home,Item,User} from './pages'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { BoardCreate, BoardDelete,BoardRead,BoardUpdate } from './components/board';
import { ItemCreate,ItemDelete,ItemRead,ItemUpdate} from './components/item';
import { UserRegister,UserLogin,UserRemove,UserUpdate } from './components/user';


const App = () => (<>
 
  <Router>
    <Nav/> 
      <Switch>
        <Route exact path ="/" component = {Home}></Route> 

        <Route exact path ="/board" component = {Board}/>
        <Route path ="/board/create" component = {BoardCreate}/>  
        <Route path ="/board/read" component = {BoardRead}/>  
        <Route path ="/board/update" component = {BoardUpdate}/>  
        <Route path ="/board/delete" component = {BoardDelete}/>  
      
        <Route exact path ="/user" component = {User}/> 
        <Route path ="/user/register" component = {UserRegister}/>  
        <Route path ="/user/login" component = {UserLogin}/>  
        <Route path ="/user/update" component = {UserUpdate}/>  
        <Route path ="/user/remove" component = {UserRemove}/>  

        <Route exact path ="/item" component = {Item}/> 
        <Route path ="/item/create" component = {ItemCreate}/>  
        <Route path ="/item/read" component = {ItemRead}/>  
        <Route path ="/item/update" component = {ItemUpdate}/>  
        <Route path ="/item/delete" component = {ItemDelete}/>  
      </Switch>  
  </Router>
</>)
   

export default App
