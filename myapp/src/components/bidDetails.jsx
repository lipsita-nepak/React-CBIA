import React, { Component }from "react";
import BidService from "../service/bidService";
import _ from "lodash";


class BidDetails extends Component{
    state = {
        bid: {
            bidId:"",
            dateOfBidding:"",
        },
     };
    componentDidMount(){
        BidService.getBidById(this.props.match.params.bidId).then((res) =>
        this.setState({ bid: res.data })
      );
    }
        /*BidService.getAllBids().then((res)=>
        {

        console.log("data:",res.data);
         this.setState({bids:res.data});
        }); 
        console.log("bidDetails: "+this.state.bids);
    } */

    handleChange=(event)=>{
        event.preventDefault();
        const bid=this.state.bid;
        bid[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ bid });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.bid);
        BidService.updateBid(
        this.props.match.params.bidId,
        this.state.bid
        ).then((res)=>{
      
            this.props.history.push("/bid");
        });
    };
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                  <h1>{this.props.match.params.bidId}</h1>
                  <div className="mb-3">
                      <label htmlFor="bidId" className="form-label">
                          BidId
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="bidId"
                       name="bidId"
                        value={this.state.bid.bidId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="dateOfBidding" className="form-label">
                          DateOfBidding
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dateOfBidding"
                        name="dateOfBidding"
                        value={this.state.bid.name}
                        onChange={this.handleChange}
                      />  
                 </div>
                  <button type="submit" className="btn btn-primary float-right">
                      Save
                  </button>
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/bid");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        );
    }
}

export default BidDetails;