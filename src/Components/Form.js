import React, { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastname: "",
      gender: "Male",
      address: "",
      phone: "",
      date: "",
      email: "",
      
      username: "",
      password: ""
      
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  

  store = () => {
    return {
      
      firstName: this.state.firstName,
      lastname: this.state.lastname,
      gender: this.state.gender,
      address: this.state.address,
      phone: this.state.phone,
      date: this.state.date,
      email: this.state.email,
      
      username: this.state.username,
      password: this.state.password
      
    };
  };

  submitInfo = () => {
    debugger
    if (this.validator.allValid()) {
      let StoreJson = this.store();
      let ConvertoJson = JSON.stringify(StoreJson);
      localStorage.setItem("StoreInfo", ConvertoJson);
      console.log(ConvertoJson);
      alert("Registered successfully");
      this.props.history.replace("/Login");
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-3 formcontent" />
          <div className="col-lg-6 formcontent">
            <form className="loginContainer">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    FirstName
                  </span>
                </div>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "firstName",
                  this.state.firstName,
                  "required|min:2"
                )}
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    LastName
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "lastname",
                  this.state.lastname,
                  "required|min:2"
                )}
              </div>


              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Email
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "email",
                  this.state.email,
                  "required|email"
                )}
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Contact Number
                  </span>
                </div>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "phone",
                  this.state.phone,
                  "required|phone|max:10"
                )}
              </div>

              <div>
                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="lblgender"
                  >
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    name="address"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                  {this.validator.message(
                    "address",
                    this.state.address,
                    "required"
                  )}
                </div>
              </div>

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
                  className="form-control"
                  name="username"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "username",
                  this.state.username,
                  "required|alpha_num|min:2"
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
                  name="password"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "password",
                  this.state.password,
                  "required|alpha_num|min:3"
                )}
              </div>

              <button
                type="button"
                className="btn btn-info"
                onClick={this.submitInfo}
              >
                Submit
              </button>
              
              <Link class="nav-link" to="/Login">
                if you are already register then Login
                </Link>
              
            </form>
          </div>
          <div className="col-lg-3 formcontent" />
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
