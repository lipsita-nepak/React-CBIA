import React, { Component } from 'react';
import FarmerService from '../services/farmerService';

class UpdateFarmer extends Component {

    constructor(props){
        super(props)
        this.state = {
            userId:this.props.match.params.userId,
            name :'',
            contactNumber:'',
            emailId:'',
            aadharNumber:'',
            panNumber:''
        }
        this.changeFarmerNameHandler=this.changeFarmerNameHandler.bind(this);
        this.changeFarmerContactNoHandler=this.changeFarmerContactNoHandler.bind(this);
        this.changeFarmerEmailIdHandler=this.changeFarmerEmailIdHandler.bind(this);
        this.changeFarmerAadharNoHandler=this.changeFarmerAadharNoHandler.bind(this);
        this.changeFarmerPanNoHandler=this.changeFarmerPanNoHandler.bind(this);
        this.editFarmer=this.editFarmer.bind(this);
    }

    componentDidMount(){
        FarmerService.viewFarmer(this.state.userId).then((res) =>{
            let farmer=res.data;
            this.setState({name:farmer.name,contactNumber:farmer.contactNumber,emailId:farmer.emailId,aadharNumber:farmer.aadharNumber,panNumber:farmer.panNumber});
        });
    }

    editFarmer = (e) => {
        e.preventDefault();
        let farmer ={name:this.state.name,contactNumber:this.state.contactNumber,
            emailId:this.state.emailId, aadharNumber:this.state.aadharNumber, panNumber:this.state.panNumber};
        console.log('farmer=>'+JSON.stringify(farmer));

        FarmerService.updateFarmer(this.state.userId,farmer).then((res) => {
              this.props.history.push(`/farmers`);
        });

    }
   
    changeFarmerNameHandler= (event) => {
        this.setState({name:event.target.value});
    }
    changeFarmerContactNoHandler =(event) => {
        this.setState({contactNumber:event.target.value});
    }
    changeFarmerEmailIdHandler =(event) => {
        this.setState({emailId:event.target.value});
    }
    changeFarmerAadharNoHandler =(event) => {
        this.setState({aadharNumber:event.target.value});
    }
    changeFarmerPanNoHandler =(event) => {
        this.setState({panNumber:event.target.value});
    }

    cancel(){
        this.props.history.push('/farmers');
    }



    render() { 
        return (  
            <div>
                <br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Farmer</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.userId}</h1>
                        
                                    
                                  <div className="form-group">
                                      <label>FarmerName</label>
                                      <input placeholder="FarmerName" name="name" className="form-control" value={this.state.name} onChange={this.changeFarmerNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Contact Number</label>
                                      <input placeholder="ContactNumber" name="contactNumber" className="form-control" value={this.state.contactNumber} onChange={this.changeFarmerContactNoHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Email ID</label>
                                      <input placeholder="EmailID" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeFarmerEmailIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Aadhar Number</label>
                                      <input placeholder="AadharNumber" name="aadharNumber" className="form-control" value={this.state.aadharNumber} onChange={this.changeFarmerAadharNoHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Pan Number</label>
                                      <input placeholder="Pan Number" name="panNumber" className="form-control" value={this.state.panNumber} onChange={this.changeFarmerPanNoHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.editFarmer.bind(this)}>Save</button>
                                  <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default UpdateFarmer;