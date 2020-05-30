import React from 'react'
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import SimpleReactValidator from "simple-react-validator";
class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        open: false,
        firstName:this.props.UserData.firstName,
        lastname:this.props.UserData.lastname,
        phone:this.props.UserData.phone,
        email:this.props.UserData.email
      };
      this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    }
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
     
      
  store = () => {
    return {
      
      firstName: this.state.firstName,
      lastname: this.state.lastname,
      gender: this.props.UserData.gender,
      address: this.props.UserData.address,
      phone: this.state.phone,
      date: this.props.UserData.date,
      email: this.props.UserData.email,
      username: this.props.UserData.username,
      password: this.props.UserData.password
      
    };
  };
 
  submitInfo = () => {
    if (this.validator.allValid()) {
      let StoreJson = this.store();
      let ConvertoJson = JSON.stringify(StoreJson);
      localStorage.setItem("StoreInfo", ConvertoJson);
      console.log(ConvertoJson);
      alert("Edit User successfully");
      this.setState({ open: false });
      window.location.reload(false)
    } else {
      
     // alert(this.validator.errorMessages.email,this.validator.errorMessages.lastname,this.validator.errorMessages.phone,this.validator.errorMessages.firstName)
      this.validator.showMessages();
      this.forceUpdate();
    }
   
    
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let { open } = this.state;
    return (
        
        <React.Fragment>
        <button onClick={this.onOpenModal}>Edit</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Edit User Information</h2>
          <div className="row">
              
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
                  name="lastname"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
                  {this.validator.message(
                  "lastname",
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
                contact Number
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
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
                  className="form-control"
                  name="email"
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
              <button
                type="button"
                className="btn btn-info"
                onClick={this.submitInfo}
              >
                Submit
              </button>
            </form>
          </div>
          

        
        </Modal>
        </React.Fragment>
    
    );
  }
}
export default EditModal;
