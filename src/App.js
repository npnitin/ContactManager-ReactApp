import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <div className="container">
          <Contacts/>
       </div>
      </div>
    );
  }
}

export default App;
