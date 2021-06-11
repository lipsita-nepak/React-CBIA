import React, { Component } from 'react';
import BankService from '../services/bankService';


class ViewBank extends Component {
    constructor(props){
        super(props)
        this.state={
            bankId: this.props.match.params.bankId,
            bank:{}
        }
    }

    componentDidMount(){
        BankService.viewBank(this.state.bankId).then( res =>{
            this.setState({bank: res.data});
        })
    }
    back(){
        this.props.history.push('/bank');
    }
    render() { 
        return ( 
            <div>
                <br/><br/>
            <div className="card col-md-6 offset-md-3 ">
                <h3 className ="text-center"> View Bank Details</h3>
                <div className="card bg-success text-light mb-4">
                <div className ="card-body">
                <h1>{this.props.match.params.bankId}</h1>
                    <div className ="row">
                        <label><b>Bank BankId: </b></label>
                        <div>{this.state.bank.bankId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Account Number:</b> </label>
                        <div>{this.state.bank.accountNumber}</div>
                    </div>
                    <div className ="row">
                        <label><b>Bank Name:</b> </label>
                        <div>{this.state.bank.bankName}</div>
                    </div>
                    <div className ="row">
                        <label><b>Bank IFSC_Code: </b></label>
                        <div>{this.state.bank.ifscCode}</div>
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
 
export default ViewBank;