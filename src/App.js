import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';

import './App.css';


 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
          <div>
            <Main />
          </div> 
      </BrowserRouter>
    );
  }
}
export default App;