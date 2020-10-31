import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Tickets';
import Faq from './Components/Faq';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import Tickets from './Components/Tickets';
import Footer from './Components/Footer';
import './App.css';


 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/tickets" component={Tickets} />
             <Route path="/faq" component={Faq} />
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App;