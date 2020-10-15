import React from 'react';
import {Nav} from './components' 

import { Home,User,Board, Item } from './templates'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import { BoardCreate, BoardDelete,BoardRead,BoardUpdate } from './container/board';
import { ItemCreate,ItemDelete,ItemRead,ItemUpdate} from './container/item';
import { UserRegister,UserLogin,UserRemove,UserUpdate } from './container/user';


const App = () => (<>
 
  <Router>
    <Nav/> 
      <Switch>
        <Route path ="/home" component = {Home}></Route> 
        <Redirect exact from = {'/'} to ={'/home'}></Redirect> 

        
        <Route path='/board' component={Board}></Route>
        <Route path ="/create-board" component = {BoardCreate}/>  
        <Route path ="/read-board" component = {BoardRead}/>  
        <Route path ="/update-board" component = {BoardUpdate}/>  
        <Route path ="/delete-board" component = {BoardDelete}/>  

        <Route path='/user' component={User}></Route>
        <Route path ="/register-user" component = {UserRegister}/>  
        <Route path ="/login-user" component = {UserLogin}/>  
        <Route path ="/update-user" component = {UserUpdate}/>  
        <Route path ="/delete-user" component = {UserRemove}/>  
 
        <Route exact path='/item' component={Item}></Route>
        <Route path ="/item/create" component = {ItemCreate}/>  
        <Route path ="/item/read" component = {ItemRead}/>  
        <Route path ="/item/update" component = {ItemUpdate}/>  
        <Route path ="/item/delete" component = {ItemDelete}/>  
      </Switch>  
  </Router>
</>)
   

export default App
