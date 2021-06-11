import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import _ from "lodash";
import BidderService  from "../services/bidderService"

class Bidder extends Component {
    constructor(props)
    {
         super(props)
        this.state={
            sortColumn: { path: "title", order: "asc" },
            search: "",
            bidders:[]
        }
    }
    componentDidMount(){
        BidderService.retrieveAllBidders().then((res) => {
            this.setState({ bidders: res.data });
          });
        }

        deleteBidder = (id) => {
            console.log("Delete bidder with id: " + id);
            const bidders = this.state.bidders.filter(
              (bidder) => bidder.userId !== id
            );
            this.setState({ bidders });
            BidderService.deleteBidder(id);
          };

          viewBidder (userId){
            this.props.history.push(`/viewbidder/${userId}`);
        }
        
    render() {
        
        return (
            <div>
                <h2 className="text-center">PROFILE</h2>
                <div className="w-75 mt-5 mx-auto">
                    <div className="d-flex justify-content-between">
                        <Link to="/bidder/add" className="btn btn-success btn-large mb-1">
                            Add
                        </Link>
                        
                    </div>    
                </div>
                <div className='row'>
                    <h3>Personal Details</h3>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th onClick={() => this.handleSort("userId")}>UserId</th>
                                <th onClick={() => this.handleSort("name")}>Name</th>
                                <th onClick={() => this.handleSort("emailId")}>Email</th>
                                <th onClick={() => this.handleSort("traderLicence")}>TraderLicence</th>
                                <th onClick={() => this.handleSort("contactNumber")}>ContactNo</th>
                                <th onClick={() => this.handleSort("panNumber")}>PanNumber</th>
                                <th onClick={() => this.handleSort("aadharNumber")}>AadharNumber</th>
                                
                               
       
                                <th colSpan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bidders.map((bidder) => (
                                  
                                    <tr key={bidder.userId}>
                                        <td>{bidder.userId}</td>
                                        <td>{bidder.name}</td>
                                        <td>{bidder.emailId}</td>
                                        <td>{bidder.contactNumber}</td>
                                        <td>{bidder.traderLicence}</td>
                                        <td>{bidder.panNumber}</td>
                                        <td>{bidder.aadharNumber}</td>
                                        
                                        
                                     
                                        
                                        <td>
                                            <Link to={`/bidder/update/${bidder.userId}`}>
                                                <button className="btn btn-secondary">Update</button>
                                            </Link>
                                            
                                            <button
                                                className="btn btn-danger ml-2"
                                                onClick={() => this.deleteBidder(bidder.userId)}
                                            >
                                                Delete
                                            </button>
                                            <td>
                                                <button style={{marginLeft:"10px"}} onClick = { () => this.viewBidder(bidder.userId)} className="btn btn-success">
                                                    View
                                                    </button></td>
                                        </td>

                                    </tr>
                                   
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
                
            </div>
        )
    }
}

export default Bidder