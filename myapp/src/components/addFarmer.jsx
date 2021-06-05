import React, { Component } from "react";
import FarmerService from "../services/farmerService";

class AddFarmer extends Component {
  state = {
    farmer: {
      name: "",
      emailId: "",
      contactNumber: "",
      aadharNumber:"",
      panNumber:"",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    FarmerService.addFarmer(this.state.farmer).then((res) => {
      this.props.history.push("/farmers");
    });
  };
  handleChange = (event) => {
    const farmer = { ...this.state.farmer };
    // dynamically handling event changes
    farmer[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ farmer });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.farmer.name}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailId" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailId"
              name="emailId"
              value={this.state.farmer.emailId}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              Contact No
            </label>
            <input
              type="text"
              className="form-control"
              id="contactNumber"
              name="contactNumber"
              value={this.state.farmer.contactNumber}
              onChange={this.handleChange}
            />
          </div>
         <div className="mb-3">
            <label htmlFor="aadharNumber" className="form-label">
              Aadhar No
            </label>
            <input
              type="text"
              className="form-control"
              id="aadharNumber"
              name="aadharNumber"
              value={this.state.farmer.aadharNumber}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="panNumber" className="form-label">
              Pan No
            </label>
            <input
              type="text"
              className="form-control"
              id="panNumber"
              name="panNumber"
              value={this.state.farmer.panNumber}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddFarmer;