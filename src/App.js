import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <div className="container">
          <Contact name="Nitin Pawar" email="achievers.nitin@gmail.com" phone="8975972716"/>
          <Contact name="Megha Sonawane" email="megha.nitin@gmail.com" phone="82844515"/>
       </div>
      </div>
    );
  }
}

export default App;
