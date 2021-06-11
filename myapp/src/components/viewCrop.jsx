import React, { Component } from "react";
import cropService from "../services/cropService";

class ViewCrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cropId: this.props.match.params.cropId,
      crop: {},
    };
  }

  componentDidMount() {
    cropService.viewCrop(this.state.cropId).then((res) => {
      this.setState({ crop: res.data });
    });
  }
  back() {
    this.props.history.push("/crop");
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Crop Details</h3>
          <div className="card bg-success text-light">
            <div className="card-body">
              <h1>{this.props.match.params.cropId}</h1>
              <div className="row">
                <label>
                  <b>Crop Name:</b>
                </label>
                <div>{this.state.crop.cropName}</div>
              </div>
              <div className="row">
                <label>
                  <b>Crop Type: </b>
                </label>
                <div>{this.state.crop.cropType}</div>
              </div>
              <div className="row">
                <label>
                  <b>Soil Type: </b>
                </label>
                <div>{this.state.crop.soilType}</div>
              </div>
              <div className="row">
                <label>
                  <b>BasePricePerQuintal: </b>
                </label>
                <div>{this.state.crop.basePricePerQuintal}</div>
              </div>
              <div className="row">
                <label>
                  <b>Quantity: </b>
                </label>
                <div>{this.state.crop.quantity}</div>
              </div>
              <div
                onClick={this.back.bind(this)}
                style={{ marginLeft: "200px" }}
              >
                <i className="fa fa-chevron-circle-left"> Back</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCrop;
