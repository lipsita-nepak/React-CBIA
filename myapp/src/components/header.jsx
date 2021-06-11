import React, { Component } from 'react'

class HeadComponent extends Component {
    constructor(props){
        super(props)
        this.state={
 
        }
     }
     render() {
         return (
             <div>
                 <header>
                 <nav class="navbar navbar-expand-lg navbar-dark "style={{ backgroundImage: "linear-gradient(20deg,green,lightgreen)"}}>
                   <a class="navbar-brand"><b>CropBiddingInsuranceApp</b></a>
                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
                          
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                           <li class="nav-item active"><a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a> </li>
                           <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                      </ul> 
                      <form class="form-inline my-3 my-lg-3">
                      <ul class="navbar-nav mr-auto">
                            <li class="nav-item active"><a class="nav-link" href="/signin"><b>Sign In</b><span class="sr-only">(current)</span></a> </li>
                      </ul>
                      </form>    
                 </div>
                 </nav>   
                 
                 </header>
             </div>
         )
     }
 }
export default HeadComponent;