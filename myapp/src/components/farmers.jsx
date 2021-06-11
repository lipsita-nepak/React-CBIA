import React, { Component } from 'react';
import FarmerService from "../services/farmerService";

class Farmer extends Component{
    constructor(props){
        super(props)
        this.state={
            farmers:[]
        }
        this.addFarmer=this.addFarmer.bind(this);
        this.deleteFarmer=this.deleteFarmer.bind(this);
        this.updateFarmer=this.updateFarmer.bind(this);
    }
    componentDidMount(){
        FarmerService.getAllFarmers().then((res)=>{
            this.setState({farmers: res.data});
        });
    }
    
    deleteFarmer(userId){
        FarmerService.deleteFarmer(userId).then(res => {
            this.setState({farmers: this.state.farmers.filter(farmer => farmer.userId !== userId)});
        });
    }
    addFarmer(){
        this.props.history.push('/add-farmer');
    }

    viewFarmer (userId){
        this.props.history.push(`/view-farmer/${userId}`);
    }

    updateFarmer(userId){
        this.props.history.push(`/update-farmer/${userId}`);
      }

    render(){
        console.log("Inside render");
        return(
            
            <div className="w-75 mt-5 mx-auto">
                 
                <h2 className="text-center" >Farmers List</h2>
                <div className="row">
                <button className="btn btn-success" onClick={this.addFarmer}>Add</button><br/><br/>
                    <table className="table table-dark mt-4">
                        <thead>
                            <tr>
                            <th>FarmerName</th>
                            <th>ContactNo</th>
                            <th>Email Id</th>
                            <th colSpan="3"><center>Action</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.farmers.map(
                                farmer =>
                                <tr key={farmer.userId}>
                                    <td>{farmer.name}</td>
                                    <td>{farmer.contactNumber}</td>
                                    <td>{farmer.emailId}</td>
                                    
                                    <td><button  style={{marginLeft:"10px"}} onClick = { () => this.updateFarmer(farmer.userId)} className="btn btn-success">Update</button></td>
                                    <td><button className="btn btn-danger"  onClick={()=>this.deleteFarmer(farmer.userId)}>Delete</button></td>
                                    <td><button style={{marginLeft:"10px"}} onClick = { () => this.viewFarmer(farmer.userId)} className="btn btn-success">View</button></td>
                                </tr>
                                )
                            }   
                        </tbody>
                    </table>
                </div>
            </div>          
        )
    }

}
export default Farmer;