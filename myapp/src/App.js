import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
//import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/header';
import Crop from './components/crop';
import AddCrop from './components/addCrop';
import ViewCrop from './components/viewCrop';
import UpdateCrop from './components/updateCrop';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import CreateUser from './components/createUser';
import ListAllUsers from './components/listAllUsers';
import UpdateUser from './components/updateUser';
import ViewUser from './components/viewUser';
import BidderHome from './components/bidderHome';
import Farmer from './components/farmers';
import AddFarmer from './components/addFarmer';
import ViewFarmer from './components/viewFarmer';
import UpdateFarmer from './components/updateFarmer';
import Bank from './components/bank';
import AddBank from './components/addBank';
import UpdateBank from './components/updateBank';
import ViewBank from './components/viewBank';
import Bidder from './components/bidders';
import AddBidder from './components/addBidder'
import BidderDetails from './components/updateBidder'

function App() {
  return (
    <div>
      <Router>
           <HeadComponent/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home"exact component={Home}/>
                    <div className="container">
                    <Route path="/bidder/add" component={AddBidder} />
                    <Route path="/bidder/get/:id" component={BidderDetails} />
                    <Route path="/bidder/update/:id" component={BidderDetails} />
                    <Route path="/bidder" component={Bidder}/>
                      <Route path= "/add-farmer" exact component = {AddFarmer} />
                      <Route path ="/view-farmer/:userId" component ={ViewFarmer} /> 
                       <Route path="/update-farmer/:userId" component = {UpdateFarmer} /> 
                       <Route path= "/bank" exact component = {Bank} />
                       <Route path= "/add-bank" exact component = {AddBank} />
                       <Route path ="/view-bank/:bankId" component ={ViewBank} /> 
                       <Route path="/update-bank/:bankId" component = {UpdateBank} /> 
                       <Route path="/farmers" exact component={Farmer} />
                    <Route path= "/crop" exact component = {Crop}></Route>
                    <Route path= "/add-crop" exact component = {AddCrop}></Route>
                    <Route path ="/view-crop/:cropId" component ={ViewCrop}></Route>
                    <Route path="/update-crop/:cropId" component = {UpdateCrop}></Route>
                    <Route path="/bidder-home"exact component={BidderHome}/>
                    <Route path="/signin"exact component={Login}/>
                    <Route path= "/register" exact component = {Register}></Route>
                    <Route path= "/users" exact component = {ListAllUsers}></Route>
                    <Route path= "/create-user" exact component = {CreateUser}></Route>
                    <Route path= "/update-user/:userid" exact component = {UpdateUser}></Route>
                    <Route path= "/view-user/:userid" exact component = {ViewUser}></Route>
                    <Route  path="/bid/add" component={AddBid}/>
        <Route  path="/bid/updateBid/:bidId" component={BidDetails}/>
        <Route path="/bid/view/:bidId" component={BidDetails} />
        <Route  path="/bid/get/:bidId" component={BidDetails}/>
        <Route  path="/bid/" component={Bid}/>
                  </div>
                </Switch>
      </Router>
    </div>
  );
}

export default App;
