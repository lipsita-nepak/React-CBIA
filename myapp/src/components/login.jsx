import React,{ Component } from 'react'
import UserService from '../services/userService'
import { Link } from "react-router-dom";
  
class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            userid:'',
            password:'',
            userRole:'',
    
        }
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeUserRoleHandler=this.changeUserRoleHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    saveUser= (e) =>{
        e.preventDefault();
        console.log('userRole=>'+this.state.userRole);
        let loginentity ={userid:this.state.userid,password:this.state.password,userRole:this.state.userRole};
         console.log('loginentity => '+JSON.stringify(loginentity));
         
        UserService.login(loginentity).then(res => {
            localStorage.setItem('userid',this.state.userid)
            if(this.state.userRole==="Admin"&&this.state.password==="Administration"&&this.state.userid==="Admin"){
             
           this.props.history.push(`/crop`);
            }
            else if(this.state.userRole==="Farmer"){
             
                this.props.history.push(`/home`);
                }
            else if(this.state.userRole==="Bidder"){
             
                this.props.history.push(`/bidder-home`);
                }
        });
       
    }
    changeUserIdHandler =(event) =>{
        this.setState({userid:event.target.value});
    }
    changePasswordHandler =(event) =>{
        this.setState({password:event.target.value});

    }
    changeUserRoleHandler =(event) =>{
        console.log('event=>'+event.target.value)
        this.setState({userRole:event.target.value});
        

    }
    
render(){
    return(
        <div>
            <br></br>
            
        <div>
            <div className = "container-md" >
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center">Login Page</h3>
                          <div className = "card-body">
                              <form>
                              <div className="form-group">
                                      <label>UserId</label>
                                      <input placeholder="UserId" type="text" name="userid" className="form-control" value={this.state.userid} onChange={this.changeUserIdHandler}/>
                                  </div>
                                  <div className="form-group">
                                      <label>Password</label>
                                      <input placeholder="Password"type ="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler}/>
                                  </div>
                                  <div className="form-group">
                                  <label>UserRole</label>
                                  <select defaultValue ="" className= "form-control"name="userRole" value={this.state.userRole} onChange={this.changeUserRoleHandler}>
                                     <option value="">Select Role</option> 
                                     <option value="Admin">Admin</option>
                                      <option value="Farmer">Farmer</option>
                                      <option value="Bidder">Bidder</option>
                                  </select>
                                  </div>
                                  
                                  <button disabled={!this.state.userRole} className="btn btn-success" onClick={this.saveUser}>Login</button>
                                  <div className="mt-2 text-center">
                                 <small>
                                     New user? <Link to="/register">SignUp</Link>
                                </small>
                                  </div>
                              </form>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
}
export default Login