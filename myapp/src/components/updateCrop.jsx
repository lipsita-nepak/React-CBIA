import React, { Component } from 'react';
import CropService from '../services/cropService';

class UpdateCrop extends Component {

    constructor(props){
        super(props)
        this.state = {
            cropId:this.props.match.params.cropId,
            cropName :'',
            cropType:'',
            soilType:'',
            basePricePerQuintal:'',
            quantity:''
        }
        this.changeCropNameHandler=this.changeCropNameHandler.bind(this);
        this.changeCropTypeHandler=this.changeCropTypeHandler.bind(this);
        this.changeSoilTypeHandler=this.changeSoilTypeHandler.bind(this);
        this.changeBasePricePerQuintalHandler=this.changeBasePricePerQuintalHandler.bind(this);
        this.changeQuantityHandler=this.changeQuantityHandler.bind(this);
        this.editCrop=this.editCrop.bind(this);
    }

    componentDidMount(){
        CropService.viewCrop(this.state.cropId).then((res) =>{
            let crop=res.data;
            this.setState({cropName:crop.cropName,cropType:crop.cropType,soilType:crop.soilType,basePricePerQuintal:crop.basePricePerQuintal,quantity:crop.quantity});
        });
    }

    editCrop = (e) => {
        e.preventDefault();
        let crop ={cropName:this.state.cropName,cropType:this.state.cropType,
            soilType:this.state.soilType, basePricePerQuintal:this.state.basePricePerQuintal, quantity:this.state.quantity};
        console.log('crop=>'+JSON.stringify(crop));

        CropService.updateCrop(this.state.cropId,crop).then((res) => {
              this.props.history.push(`/crop`);
        });

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



    render() { 
        return (  
            <div>
                <br/><br/>
                <div className="container-md">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Crop</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.cropId}</h1>
                        
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
                                  <button className="btn btn-success" onClick={this.editCrop.bind(this)}>Save</button>
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
export default UpdateCrop