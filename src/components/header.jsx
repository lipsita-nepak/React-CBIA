import React, { Component } from 'react'

class HeadComponent extends Component {
    constructor(props){
        super(props)
            this.state={}
        this.home=this.home.bind(this);
    }
    home(){
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-success">
                        <div className="navbar-brand">CropBidding</div>
                        <div className="navbar-brand" onClick = { () => this.home}>Home</div>
                        <div className="navbar-brand">Crop</div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeadComponent;