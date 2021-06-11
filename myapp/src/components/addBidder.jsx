import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BidderService  from "../services/bidderService"
import { Link } from "react-router-dom";


class AddBidder extends Component {
    state={
        bidder:{
            userId:"",
            name:"",
            contactNumber:"",
            aadharNumber:"",
            panNumber:"",
            emailId:"",
            traderLicence:"",
            
            
        },
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
        BidderService.addBidder(this.state.bidder).then((res) => {
          this.props.history.push("");
        });
      };
      handleChange = (event) => {
        const bidder = { ...this.state.bidder };
        
        bidder[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ bidder });
      };
      
    render() {
        return (
          <div style={{margin: "20px 200px 20px 200px",padding:" 10px", border:"5px",borderColor:"rgb(78, 78, 233)",borderStyle: "solid",backgroundColor:"rgb(159, 190, 247)"}}>
          <div className="w-50 mx-auto">
          <form onSubmit={this.handleSubmit}>
          <div class="form-row">
                        
                  <div class="form-group col-md-6">
                 <label htmlFor="name" className="form-label">
                      Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={this.state.bidder.name}
                    onChange={this.handleChange}
                  />
                  </div>
       
                  <div class="form-group col-md-6">
                  <label htmlFor="contactNumber" className="form-label">
                  contactNumber
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNumber"
                    name="contactNumber"
                    value={this.state.bidder.contactNumber}
                    onChange={this.handleChange}
                  /> 
                  </div>
                </div>
       
                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label htmlFor="aadharNumber" className="form-label">
                  aadharNumber
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="aadharNumber"
                    name="aadharNumber"
                    value={this.state.bidder.aadharNumber}
                    onChange={this.handleChange}
                  />  
                  </div>


                  <div class="form-group col-md-6">
                  <label htmlFor="panNumber" className="form-label">
                  panNumber
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="panNumber"
                    name="panNumber"
                    value={this.state.bidder.panNumber}
                    onChange={this.handleChange}
                  />  
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                 <label htmlFor="emailId" className="form-label">
                      emailId
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailId"
                    name="emailId"
                    value={this.state.bidder.emailId}
                    onChange={this.handleChange}
                  /> 
                  </div>

                  
                  <div class="form-group col-md-6">
                  <label htmlFor="traderLicence" className="form-label">
                      Trader Licence
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="traderLicence"
                    name="traderLicence"
                    value={this.state.bidder.traderLicence}
                    onChange={this.handleChange}
                  />  
                 </div>
                </div>

                
             

                
              <button type="submit" className="btn btn-primary">
                  Submit
              </button>   
              <Link to={`/address/add/${this.state.bidder.userId}`}>
                    <button className="btn btn-secondary">Add Address</button>
              </Link> 
          </form>
      </div>
      </div>
  );
    }
}

export default AddBidde