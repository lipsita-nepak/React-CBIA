import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
//import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/header';
import Crop from './components/crop';
import AddCrop from './components/addCrop';
import ViewCrop from './components/viewCrop';
import UpdateCrop from './components/updateCrop';
//import Home from './components/home';
function App() {
  return (
    <div>
      <Router>
           <HeadComponent/>
              <div className="container">
                <Switch>
                    <Route path= "/crop" exact component = {Crop}></Route>
                    <Route path= "/add-crop" exact component = {AddCrop}></Route>
                    <Route path ="/view-crop/:cropId" component ={ViewCrop}></Route>
                    <Route path="/update-crop/:cropId" component = {UpdateCrop}></Route>
                    <Route path="/" exact component={Crop} />
                    <Crop/>
                </Switch>
              </div>
      </Router>
    </div>
  );
}

export default App;
