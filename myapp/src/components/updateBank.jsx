import React, { Component } from 'react';
import BankService from '../services/bankService';

class UpdateBank extends Component {

    constructor(props){
        super(props)
        this.state = {
            bankId:this.props.match.params.bankId,
            accountNumber:'',
            bankName :'',
            ifscCode:''
        }
        this.changeBankAccountNoHandler=this.changeBankAccountNoHandler.bind(this);
        this.changeBankNameHandler=this.changeBankNameHandler.bind(this);
        this.changeBankIfscCodeHandler=this.changeBankIfscCodeHandler.bind(this);
        this.editBank=this.editBank.bind(this);
    }

    componentDidMount(){
        BankService.viewBank(this.state.bankId).then((res) =>{
            let bank=res.data;
            this.setState({accountNumber:bank.accountNumber,bankName:bank.bankName,ifscCode:bank.ifscCode});
        });
    }

    editBank = (e) => {
        e.preventDefault();
        let bank ={accountNumber:this.state.accountNumber,bankName:this.state.bankName,ifscCode:this.state.ifscCode};
        console.log('bank=>'+JSON.stringify(bank));

        BankService.updateBank(this.state.bankId,bank).then((res) => {
              this.props.history.push(`/bank`);
        });

    }
    changeBankAccountNoHandler =(event) => {
      this.setState({accountNumber:event.target.value});
    }
    changeBankNameHandler= (event) => {
        this.setState({bankName:event.target.value});
    }
   
    changeBankIfscCodeHandler =(event) => {
        this.setState({ifscCode:event.target.value});
    }

    cancel(){
        this.props.history.push('/bank');
    }



    render() { 
        return (  
            <div>
                <br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Bank Details</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.bankId}</h1>
                        
                                    <div className="form-group">
                                      <label>Account Number</label>
                                      <input type="text" placeholder="Account Number" name="accountNumber" className="form-control" value={this.state.accountNumber} onChange={this.changeBankAccountNoHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Bank Name</label>
                                      <input type="text" placeholder="BankName" name="bankName" className="form-control" value={this.state.bankName} onChange={this.changeBankNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>IFSC Code</label>
                                      <input type="text" placeholder="IFSC_Code" name="ifscCode" className="form-control" value={this.state.ifscCode} onChange={this.changeBankIfscCodeHandler}/>
                                  </div>
                                  <button className="btn btn-success" onClick={this.editBank.bind(this)}>Save</button>
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
export default UpdateBank;