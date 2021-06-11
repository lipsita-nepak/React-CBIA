import React, { Component } from 'react';
import FarmerService from "../services/farmerService";
  
class AddFarmer extends Component{
    constructor(props){
        super(props)

        this.state={
            name :'',
            contactNumber:'',
            emailId:'',
            aadharNumber:'',
            panNumber:'',
        }
        this.changeFarmerNameHandler=this.changeFarmerNameHandler.bind(this);
        this.changeFarmerContactNoHandler=this.changeFarmerContactNoHandler.bind(this);
        this.changeFarmerEmailIdHandler=this.changeFarmerEmailIdHandler.bind(this);
        this.changeFarmerAadharNoHandler=this.changeFarmerAadharNoHandler.bind(this);
        this.changeFarmerPanNoHandler=this.changeFarmerPanNoHandler.bind(this);
        this.saveFarmer=this.saveFarmer.bind(this);
    }
    saveFarmer= (e) =>{
        e.preventDefault();
        let farmer ={name:this.state.name,contactNumber:this.state.contactNumber,
            emailId:this.state.emailId,aadharNumber:this.state.aadharNumber,panNumber:this.state.panNumber};
        console.log('farmer=>'+JSON.stringify(farmer));
        FarmerService.addFarmer(farmer).then(res => {
           this.props.history.push('/farmers');
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
    changeFarmerAadharNoHandler=(event) => {
      this.setState({aadharNumber:event.target.value});
    }
    changeFarmerPanNoHandler=(event) => {
      this.setState({panNumber:event.target.value});
    }
    cancel(){
        this.props.history.push('/farmers');
    }
render(){
    return(
        <div>
            <br/><br/>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Farmer</h3>
                          <div className = "card-body">
                              <form>
                                  <div className="form-group">
                                      <label>FarmerName</label>
                                      <input type="text" placeholder="FarmerName" name="name" className="form-control" value={this.state.name} onChange={this.changeFarmerNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>ContactNumber</label>
                                      <input type="text" placeholder="ContactNumber" name="contactNumber" className="form-control" value={this.state.contactNumber} onChange={this.changeFarmerContactNoHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Email Id</label>
                                      <input type="email" placeholder="EmailId" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeFarmerEmailIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Aadhar Number</label>
                                      <input type="text" placeholder="AadharNumber" name="aadharNumber" className="form-control" value={this.state.aadharNumber} onChange={this.changeFarmerAadharNoHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Pan Number</label>
                                      <input type="text" placeholder="PanNumber" name="panNumber" className="form-control" value={this.state.panNumber} onChange={this.changeFarmerPanNoHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveFarmer}>Save</button>
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
export default AddFarmer;