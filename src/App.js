 import Home from './Pages/Home/Home';
 import Profile from './Pages/Profile/Profile';
 import Login from "./Pages/Login/Login";
 import Register from "./Pages/Register/Register";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login" >
            <Login/>
        </Route>
        <Route path="/register/:username" >
          <Register/>
        </Route>
        </Switch>
      </div>
       
    </Router>
  
  );
}

export default App;
