import React,{Component} from "react";

import BidService from '../service/bidService';
import _ from "lodash";
import {Link} from "react-router-dom";

class Bid extends Component{
      state={
        bids:[],
    /*constructor(props){
        super(props)
        this.state={*/
        sortColumn:{path:"title",order:"asc"},
        search:"",
    bid : {

    }
      
  };
    



componentDidMount(){
   BidService.getAllBids().then((res)=>{
    console.log("data:", res.data);
        this.setState({bids:res.data});
    
    });
    console.log("bidDetails:"+this.state.bid);
}
    deleteBid=(bidId)=>{
        console.log("Delete bid with id: " +bidId);
        const bids=this.state.bids.filter(
            (bid)=>bid.bidid !== bidId
        );
        this.setState({ bids});
        BidService.deleteBid(bidId);
    };
    viewBid=()=>{
        let bids=[];
        BidService.getBidById(this.state.serach).then((res)=>{
          console.log("**data: ", res.data);
          bids=res.data;
        });
        this.setState({ bids });
        console.log("**viewBid"+this.state.bid);
      };
        handleSort=(path)=>{
        console.log(path);
        this.setState({ 
        sortColumn: { path, order: "asc"}});
      };
    
      onChange=(event)=>{
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
    
    
    

render(){
    const { search, sortColumn, bids}=this.state;
    var sorted=[];
    if(search){
      sorted=bids.filter((bid)=>bid.bidId==search);
    }else{
      sorted=_.orderBy(
        this.state.bids,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.bids);
    console.log("Sorted..",sorted);
    return(
       
            <div className="W-75 mt-5 mx-auto">
                <div className="d-flex justify-content-between">
                <Link to="/bid/add"className="btn.btn-success.btn-large.mb-1">
                Add
                </Link>
                <form class="form-inline my-2 my-lg-0">
             <input
              classNAme="form-control ml-auto"
              type="search"
              placeholder="Search by Id"
              aria-label="Search"
              onChange={this.onChange}
             />
             <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewBid} 
             >
               Search
            </button> 
           </form>
         </div>

           <table className= "table mt-3">
            <thead className="table-dark">  
            
              
                
                    <tr>
                
                   <th onClick={()=>this.handleSort("dateOfBidding")}> dateOfBidding</th>
                   <th colSpan="2">Action</th>
            
                    </tr>
                </thead>
                <tbody>
                    {
                        sorted.map((bid) => (
                        <tr key ={bid.bidId}>
                           
                            <td>{bid.dateOfBidding}</td>
                            <td>
                            <Link to={'/bid/updateBid/${bid.bidId}'}>
                      <button className="btn btn-secondary">UpdateBid</button>
                    </Link>

                             <button 
                             className="btn btn-danger ml-2"
                             onClick={()=> this.deleteBid(bid.bidId)}
                             >
                                 Delete
                                 </button>   
                            </td>
            
                           
                            
                             </tr>
                    ))}

                </tbody>
            </table>
            </div>
        
    );
}
}
export default Bid;