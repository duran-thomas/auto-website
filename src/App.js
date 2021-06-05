import './App.css';
import Home from './components/pages/index'
import { Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import NewVehicles from './components/pages/NewVehicles';
import UsedVehicles from './components/pages/UsedVehicles';
import ContactUs from './components/pages/ContactUs'
import AboutUs from './components/pages/AboutUs'
import BookAppointment from './components/pages/BookAppointment'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
function App() {
  const firebaseApp = firebase.apps[0];
  return <div className='App'>
    <NavigationBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/new-vehicles" component={NewVehicles} />
    <Route exact path="/used-vehicles" component={UsedVehicles} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/contact-us" component={ContactUs} />
    <Route exact path="/book-appointment" component={BookAppointment} />
  </div>
}

export default App;
