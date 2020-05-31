import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameLogin: "",
      passwordLogin: ""
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  

  getDataFromLocalStorage = () => {
    let data = localStorage.getItem("StoreInfo");
    return data;
  };

  convertDatajsonIntoObject = () => {
    let localStorageData = this.getDataFromLocalStorage();
    return JSON.parse(localStorageData);
  };

  loginUser = () => {

    let jsdata = this.convertDatajsonIntoObject();
    console.log(jsdata);


    if (this.validator.allValid()) {
      debugger
      if(jsdata !== null){
      let uName = this.state.usernameLogin;
      let uPass = this.state.passwordLogin;
      let uregi = jsdata.username;
      let upregi = jsdata.password;
      jsdata.isLogin = true;
      console.log("is login ",jsdata);
      let ConvertoJson = JSON.stringify(jsdata);
      localStorage.setItem("StoreInfo", ConvertoJson);
      console.log(ConvertoJson);
      
      if (uName === uregi) {
        if (uPass === upregi) {
          
          this.props.history.replace("/UserInfo");
        } else {
          alert("Password Does Not Match");
        }
      } else {
        alert("Username Does Not Match");
      }
    }
    else {
      alert("Please first Register ");
    }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-3 logincontent" />
          <div className="col-lg-6 logincontent">
            <form className="loginContainer">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Username
                  </span>
                </div>
                <input
                  type="text"
                  name="usernameLogin"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.usernameLogin}
                  onChange={this.handleChange}
                />

                {this.validator.message(
                  "usernameLogin",
                  this.state.usernameLogin,
                  "required|min:2"
                )}
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Password
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="passwordLogin"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.passwordLogin}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "passwordLogin",
                  this.state.passwordLogin,
                  "required|min:2"
                )}
              </div>

              <button
                type="button"
                className="btn btn-info"
                onClick={this.loginUser}
              >
                Login
              </button>
              
                
                <Link class="nav-link" to="/">
                Not yet Register, Register Now 
                </Link>
            
            </form>
            

          </div>
          <div className="col-lg-3 logincontent" />
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
