import React, { Component } from "react";
import EditModel from "../Components/EditModal";
import Form from "../Components/Form";
export class UserInfo extends Component {
  
  getDataFromLocalStorage = () => {
    let data = localStorage.getItem("StoreInfo");
    return data;
  };

  convertDatajsonIntoObject = () => {
    let localStorageData = this.getDataFromLocalStorage();
    return JSON.parse(localStorageData);
  };

  logOutUser = () => {
     let userdta= this.jsdata;
     userdta.isLogin=false;
     let ConvertoJson = JSON.stringify(userdta);
     localStorage.setItem("StoreInfo", ConvertoJson);
     console.log("logout user ",userdta);
     this.props.history.replace("/Login");
  }

  jsdata = this.convertDatajsonIntoObject();
  
  render() {
debugger
   if( this.jsdata !== null && this.jsdata.isLogin === true)
   {
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
            <div style={{float: 'right'}}>
            <button  onClick={this.logOutUser}>logut</button>
            </div>
          </div>
          <div className="col-lg-3 " />
        </div>
      </div>
    );
   }
   else{
     return(
       <div>
        <Form/>
        </div>
     );
   }
  }
}

export default UserInfo;
