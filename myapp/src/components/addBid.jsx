import React, { Component } from "react";

import BidService from "../service/bidService";


class AddBid extends Component{
    state={
        bid:{
           bidId:"",
            dateOfBidding:"",

        },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        BidService.addBid(this.state.bid).then((res)=>{
            this.props.history.push("/bid");

        });
    };
    handleChange=(event)=>{
        const bid={...this.state.bid};
        bid[event.currentTarget.name]=event.currentTarget.value;
        this.setState({bid});
    };
    render(){
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
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
                          autoFocus
                        />
                        </div>
                        <div className="mb-3">
                       <label htmlFor="dateOfBidding" className="form-label">
                            dateOfBidding
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dateOfBidding"
                          name="dateOfBidding"
                          value={this.state.bid.name}
                          onChange={this.handleChange}
                          autoFocus
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

export default AddBid;