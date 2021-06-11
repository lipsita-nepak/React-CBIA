import React, { Component } from 'react';
import CropService from "../services/cropService";
import userService from '../services/userService';
import { Link } from "react-router-dom";

class Crop extends Component{
    constructor(props){
        super(props)
        this.state={
            crops:[],
            search:"",
            userid:localStorage.getItem('userid')
        }
        this.addCrop=this.addCrop.bind(this);
        this.deleteCrop=this.deleteCrop.bind(this);
        this.updateCrop=this.updateCrop.bind(this);
        this.logout=this.logout.bind(this);
    }
    componentDidMount(){
        CropService.getAllCrops().then((res)=>{
            this.setState({crops: res.data});
        });
    }

    getCropByName = () => {
        let crops = [];
        CropService.getCropByName(this.state.search).then((res) => {
            console.log("**data:",res.data);
          crops = res.data;
        });
          this.setState({crops});
          console.log("**view:",this.state.crops);
      }

    onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
    
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
    
    logout(){
        console.log('logout=>'+this.state.userid)
        userService.logout(this.state.userid).then(res=>{
            this.props.history.push(`/home`)
        })
    }

    render(){
        return(
            <div>
                 <br/><br/>
                 <form className="form-inline my-2 my-lg-0">
                 <input
                    className="form-control ml-auto"
                    type="search"
                    name="name"
                    placeholder="Search by name"
                    aria-label="Search"
                    onChange={this.onChange}
                  />
                 <button
                   className="btn btn-outline-success my-2 my-sm-0"
                   type="button"
                   onClick={this.getCropByName}
                  >
                  Search
                 </button></form>
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
                                (crop)=>(
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
                                ))
                            }   
                        </tbody>
                        <Link onClick={this.logout}>Logout</Link>
                    </table>
                </div>
            </div>          
        );
    }

}
export default Crop;
