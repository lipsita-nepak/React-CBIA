import React, { Component } from 'react';
import CropService from "../services/cropService";

class Crop extends Component{
    constructor(props){
        super(props)
        this.state={
            crops:[]
        }
        this.addCrop=this.addCrop.bind(this);
        this.deleteCrop=this.deleteCrop.bind(this);
        this.updateCrop=this.updateCrop.bind(this);
    }
    componentDidMount(){
        CropService.getAllCrops().then((res)=>{
            this.setState({crops: res.data});
        });
    }
    
    deleteCrop(cropId){
        CropService.deleteCrop(cropId).then(res => {
            this.setState({crops: this.state.crops.filter(crop => crop.cropId !== cropId)});
        });
    }
    addCrop(){
        this.props.history.push('/add-crop');
    }

    viewCrop (cropId){
        this.props.history.push(`/view-crop/${cropId}`);
    }

    updateCrop(cropId){
        this.props.history.push(`/update-crop/${cropId}`);
      }

    render(){
        return(
            <div>
                 <br/><br/>
                <h2 className="text-center" >Crop List</h2>
                <div className="row">
                <td style={{color:"green"}}onClick={this.addCrop}><i className="fa fa-puzzle-piece"> ADD</i></td><br/><br/>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>CropName</th>
                            <th>CropType</th>
                            <th>SoilType</th>
                            <th>BasePricePerQuintal</th>
                            <th>Quantity</th>
                            <th colSpan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.crops.map(
                                crop =>
                                <tr key={crop.cropId}>
                                    <td>{crop.cropName}</td>
                                    <td>{crop.cropType}</td>
                                    <td>{crop.soilType}</td>
                                    <td>{crop.basePricePerQuintal}</td>
                                    <td>{crop.quantity}</td>
                                    <td style={{marginLeft:"10px",color:"green"}} onClick = { () => this.updateCrop(crop.cropId)}><i className="fa fa-edit"></i></td>
                                    <td style={{color:"red"}}onClick={()=>this.deleteCrop(crop.cropId)}><i className="fa fa-trash"></i></td>
                                    <td style={{marginLeft:"10px",color:"green"}} onClick = { () => this.viewCrop(crop.cropId)}><i className="fa fa-eye"></i></td>
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
export default Crop;
