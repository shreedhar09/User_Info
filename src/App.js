import React, { Component } from "react";
import "./ComponentCSS/App.css";
import Form from "./Components/Form";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserInfo from "./Components/UserInfo";

class App extends Component {

  render() {
    console.log("app app ");
    return (
      <div className="BG">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/UserInfo" exact component={UserInfo} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
