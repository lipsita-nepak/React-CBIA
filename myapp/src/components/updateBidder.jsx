import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BidderService  from "../services/bidderService"

class BidderDetails extends Component {
    state={
        bidder:{
            userId:"",
            name:"",
            contactNumber:"",
            aadharNumber:"",
            panNumber:"",
            emailId:"",
            traderLicence:"",
            homeAddress:{
              houseno:"",
            },

           
        },
    }
    componentDidMount() {
        BidderService.retrieveBidderById(this.props.match.params.id).then((res) =>
          this.setState({ bidder: res.data })
        );
      }
    
      handleChange = (event) => {
        event.preventDefault();
        const bidder = this.state.bidder;
        bidder[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ bidder });
      };
      handleChange1 = (event) => {
        event.preventDefault();
        const homeAddress = this.state.bidder.homeAddress;
        homeAddress[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ homeAddress });
      };
      
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.bidder);
        BidderService.updateBidder(
          this.props.match.params.id,
          this.state.bidder
        ).then((res) => {
          this.props.history.push("/bidder");
        });
      };
      render() {
        return (
          <div>
            <div style={{margin: "20px 200px 20px 200px",padding:" 10px", border:"5px",borderColor:"rgb(78, 78, 233)",borderStyle: "solid",backgroundColor:"rgb(159, 190, 247)"}}>
            <h1>{this.state.bidder.name}</h1>

              <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
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
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  value={this.state.bidder.emailId}
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                />

                      </div>
                      <div class="form-group col-md-6">
                      <label htmlFor="traderLicence" className="form-label">
                          traderLicence
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
                        
                      
                  
              
                <button type="submit" className="btn btn-primary float-center">
                  Save
                </button>
                <button
                    className="btn btn-secondary mr-2 float-center"
                    onClick={() => {
                        this.props.history.push("/bidder");
                    }}
              >
                    Cancel
              </button>
              
              </div>
            </form>
          </div>
          </div>
          

 );
 }   
}

export default BidderDetails