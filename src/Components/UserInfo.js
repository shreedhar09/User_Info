import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import EditModel from "../Components/EditModal";
export class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
debugger
  getDataFromLocalStorage = () => {
    let data = localStorage.getItem("StoreInfo");
    return data;
  };

  convertDatajsonIntoObject = () => {
    let localStorageData = this.getDataFromLocalStorage();
    return JSON.parse(localStorageData);
  };
debugger
  jsdata = this.convertDatajsonIntoObject();
  componentDidUpdate()
  {
      console.log("componentDidUpdate 1 ");
  }

  componentDidMount(){
    console.log("componentDidUpdate 3 ");
  }
  render() {
    debugger
    console.log("componentDidUpdate 2 ");
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 " />
          <div className="col-lg-6 groupTogether">
            <h1 className="mainTag">User Information</h1>
            <h4 className="heading">
              Firstname - {this.jsdata.firstName}
            </h4>
            <h4 className="heading">
              Lastname - {this.jsdata.lastname}
            </h4>
            <h4 className="heading">
              Contact Number - {this.jsdata.phone}
            </h4>
            <h4 className="heading">
              Email - {this.jsdata.email}
            </h4>
            <h4 className="heading">
              
              <EditModel UserData={this.jsdata}/>
            </h4>
          </div>
          <div className="col-lg-3 " />
        </div>
      </div>
    );
  }
}

export default UserInfo;
