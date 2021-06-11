import React, { Component } from 'react';
import BankService from "../services/bankService";
  
class AddBank extends Component{
    constructor(props){
        super(props)

        this.state={
            accountNumber:'',
            bankName :'',
            ifscCode:''
            
        }
        this.changeBankAccountNumberHandler=this.changeBankAccountNumberHandler.bind(this);
        this.changeBankNameHandler=this.changeBankNameHandler.bind(this);
        this.changeBankIfscCodeHandler=this.changeBankIfscCodeHandler.bind(this);
        this.saveBank=this.saveBank.bind(this);
    }
    saveBank= (e) =>{
        e.preventDefault();
        let bank ={accountNumber:this.state.accountNumber,bankName:this.state.bankName,ifscCode:this.state.ifscCode};
        console.log('bank=>'+JSON.stringify(bank));
        BankService.addBank(bank).then(res => {
           this.props.history.push('/bank');
        });
    }
    changeBankAccountNumberHandler=(event) => {
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
render(){
    return(
        <div>
            <br/><br/>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Add Bank Details</h3>
                          <div className = "card-body">
                              <form>
                                 <div className="form-group">
                                      <label>Account Number</label>
                                      <input type="text" placeholder="Account Number" name="accountNumber" className="form-control" value={this.state.accountNumber} onChange={this.changeBankAccountNumberHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>BankName</label>
                                      <input type="text" placeholder="BankName" name="bankName" className="form-control" value={this.state.bankName} onChange={this.changeBankNameHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>IFSC_Code</label>
                                      <input type="text" placeholder="IFSC_Code" name="ifscCode" className="form-control" value={this.state.ifscCode} onChange={this.changeBankIfscCodeHandler}/>
                                  </div>
                                
                                  <button className="btn btn-success" onClick={this.saveBank}>Save</button>
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
export default AddBank;