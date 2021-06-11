import React, { Component } from 'react';
import BankService from "../services/bankService";

class Bank extends Component{
    constructor(props){
        super(props)
        this.state={
            banks:[]
        }
        this.addBank=this.addBank.bind(this);
        this.deleteBank=this.deleteBank.bind(this);
        this.updateBank=this.updateBank.bind(this);
    }
    componentDidMount(){
        BankService.getAllBanks().then((res)=>{
            this.setState({banks: res.data});
        });
    }
    
    deleteBank(bankId){
        BankService.deleteBank(bankId).then(res => {
            this.setState({banks: this.state.banks.filter(bank => bank.bankId !== bankId)});
        });
    }
    addBank(){
        this.props.history.push('/add-bank');
    }

    viewBank (bankId){
        this.props.history.push(`/view-bank/${bankId}`);
    }

    updateBank(bankId){
        this.props.history.push(`/update-bank/${bankId}`);
      }

    render(){
        return(
            <div className="w-75 mt-5 mx-auto">
                 <br/>
                <h2 className="text-center" >Bank List</h2>
                <div className="row">
                <button className="btn btn-success" onClick={this.addBank}>Add</button><br/><br/>
                    <table className="table  table-dark mt-4">
                        <thead>
                            <tr>
                            <th>Account Number</th>    
                            <th>Bank Name</th>
                            <th>IFSC_Code</th>
                            <th colSpan="2"><center>Action</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.banks.map(
                                bank =>
                                <tr key={bank.bankId}>
                                    <td>{bank.accountNumber}</td>
                                    <td>{bank.bankName}</td>
                                    <td>{bank.ifscCode}</td>
                                    <td><button  style={{marginLeft:"5px"}} onClick = { () => this.updateBank(bank.bankId)} className="btn btn-success">Update</button></td>
                                    <td><button className="btn btn-danger"  onClick={()=>this.deleteBank(bank.bankId)}>Delete</button></td>
                                    <td><button style={{marginLeft:"5px"}} onClick = { () => this.viewBank(bank.bankId)} className="btn btn-success">View</button></td>
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
export default Bank;