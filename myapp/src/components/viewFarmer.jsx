import React, { Component } from 'react';
import FarmerService from '../services/farmerService';


class ViewFarmer extends Component {
    constructor(props){
        super(props)
        this.state={
            userId: this.props.match.params.userId,
            farmer:{}
        }
    }

    componentDidMount(){
        FarmerService.viewFarmer(this.state.userId).then( res =>{
            this.setState({farmer: res.data});
        })
    }
    back(){
        this.props.history.push('/farmers');
    }
    render() { 
        return ( 
            <div>
                <br/><br/>
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Farmer Details</h3>
                <div className="card bg-success text-light mb-4">
                <div className ="card-body">
                <h1>{this.props.match.params.userId}</h1>
                    <div className ="row">
                        <label><b>FarmerId: </b></label>
                        <div>{this.state.farmer.userId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Farmer Name:</b> </label>
                        <div>{this.state.farmer.name}</div>
                    </div>
                    <div className ="row">
                        <label><b>Contact Number: </b></label>
                        <div>{this.state.farmer.contactNumber}</div>
                    </div>
                    <div className ="row">
                        <label><b>Email ID: </b></label>
                        <div>{this.state.farmer.emailId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Aadhar Number: </b></label>
                        <div>{this.state.farmer.aadharNumber}</div>
                    </div>
                    <div className ="row">
                        <label><b>Pan Number: </b></label>
                        <div>{this.state.farmer.panNumber}</div>
                    </div>
                    <div>
                    <button className="btn btn-dark"  onClick={this.back.bind(this)} style={{marginLeft:"200px"}}>Back</button>
                    </div>
                        
                </div>

                </div>
            </div>
            </div>
         )
    }
}
 
export default ViewFarmer;