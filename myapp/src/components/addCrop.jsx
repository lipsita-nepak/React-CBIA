import React, { Component } from 'react';
import CropService from "../services/cropService";
  
class AddCrop extends Component{
    constructor(props){
        super(props)

        this.state={
            cropId:'',
            cropName :'',
            cropType:'',
            soilType:'',
            basePricePerQuintal:'',
            quantity:''
        }
        this.changeCropIdHandler=this.changeCropIdHandler.bind(this);
        this.changeCropNameHandler=this.changeCropNameHandler.bind(this);
        this.changeCropTypeHandler=this.changeCropTypeHandler.bind(this);
        this.changeSoilTypeHandler=this.changeSoilTypeHandler.bind(this);
        this.changeBasePricePerQuintalHandler=this.changeBasePricePerQuintalHandler.bind(this);
        this.changeQuantityHandler=this.changeQuantityHandler.bind(this);
        this.saveCrop=this.saveCrop.bind(this);
    }
    saveCrop= (e) =>{
        e.preventDefault();
        let crop ={cropId:this.state.cropId,cropName:this.state.cropName,cropType:this.state.cropType,
            soilType:this.state.soilType, basePricePerQuintal:this.state.basePricePerQuintal, quantity:this.state.quantity};
        console.log('crop=>'+JSON.stringify(crop));
        CropService.addCrop(crop).then(res => {
           this.props.history.push('/crop');
        });
    }
    changeCropIdHandler =(event) =>{
        this.setState({cropId:event.target.value});
    }
    changeCropNameHandler= (event) => {
        this.setState({cropName:event.target.value});
    }
    changeCropTypeHandler =(event) => {
        this.setState({cropType:event.target.value});
    }
    changeSoilTypeHandler =(event) => {
        this.setState({soilType:event.target.value});
    }
    changeBasePricePerQuintalHandler =(event) => {
        this.setState({basePricePerQuintal:event.target.value});
    }
    changeQuantityHandler =(event) => {
        this.setState({quantity:event.target.value});
    }
    cancel(){
        this.props.history.push('/crop');
    }
render(){
    return(
        <div>
            <br/><br/>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Crop</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>CropId</label>
                                      <input placeholder="CropId" name="cropID" className="form-control" value={this.state.cropId} onChange={this.changeCropIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>CropName</label>
                                      <input placeholder="CropName" name="cropName" className="form-control" value={this.state.cropName} onChange={this.changeCropNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>CropType</label>
                                      <input placeholder="CropType" name="cropType" className="form-control" value={this.state.cropType} onChange={this.changeCropTypeHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>SoilType</label>
                                      <input placeholder="SoilType" name="soilType" className="form-control" value={this.state.soilType} onChange={this.changeSoilTypeHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>BasePricePerQuantial</label>
                                      <input placeholder="BasePricePerQuantial" name="basePricePerQuantial" className="form-control" value={this.state.basePricePerQuintal} onChange={this.changeBasePricePerQuintalHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Quantity</label>
                                      <input placeholder="Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.saveCrop}>Save</button>
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
export default AddCrop