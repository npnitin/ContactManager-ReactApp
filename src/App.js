import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header title="Contact Manager"/>
       <Contact name="Nitin Pawar" email="achievers.nitin@gmail.com" phone="8975972716"/>
      </div>
    );
  }
}

export default App;
