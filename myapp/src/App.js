import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from './components/nav';
import Farmer from './components/farmers';
import AddFarmer from './components/addFarmer';
import ViewFarmer from './components/viewFarmer';
import UpdateFarmer from './components/updateFarmer';
import Bank from './components/bank';
import AddBank from './components/addBank';
import UpdateBank from './components/updateBank';
import ViewBank from './components/viewBank';
 
function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <Switch>
          
          <Route path= "/add-farmer" exact component = {AddFarmer} />
          <Route path ="/view-farmer/:userId" component ={ViewFarmer} /> 
          <Route path="/update-farmer/:userId" component = {UpdateFarmer} /> 

          <Route path= "/add-bank" exact component = {AddBank} />
          <Route path ="/view-bank/:bankId" component ={ViewBank} /> 
          <Route path="/update-bank/:bankId" component = {UpdateBank} /> 

          <Route path="/farmers" exact component={Farmer} />
          <Route path= "/bank" exact component = {Bank} />
          <Route path="/" exact component={Home} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
