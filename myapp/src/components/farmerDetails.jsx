import React, { Component } from 'react';
import FarmerService from "../services/farmerService";

class FarmerDetails extends Component {
    state = { 
        farmer: {
            userId: "",
            name: "",
            emailId: "",
            contactNumber: "",
            aadharNumber:"",
            panNumber:"",
          },
     };

     componentDidMount() {
        FarmerService.getFarmerById(this.props.match.params.id).then((res) =>
          this.setState({ farmer: res.data })
        );
      }

      handleChange = (event) => {
        event.preventDefault();
        const farmer = this.state.farmer;
        farmer[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ farmer });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.farmer);
        FarmerService.updateFarmer(
          this.props.match.params.id,
          this.state.farmer
        ).then((res) => {
          this.props.history.push("/farmers");
        });
      };
    render() { 
        return ( 
            <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
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
              aria-describedby="emailHelp"
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

          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/farmers");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
         );
    }
}
 
export default FarmerDetails;