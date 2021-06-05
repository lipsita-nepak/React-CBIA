import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from './components/nav';
import Farmers from './components/farmers';
import AddFarmer from './components/addFarmer';
import FarmerDetails from './components/farmerDetails';

function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <Switch>
          <Route path="/farmers/add" component={AddFarmer} />
          <Route path="/farmers/get/:id" component={FarmerDetails} />
          <Route path="/farmer/update/:id" component={FarmerDetails} />
          <Route path="/farmers" component={Farmers} />
          <Route path="/" exact component={Home} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
