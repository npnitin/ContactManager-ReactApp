import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import { Provider } from './context';
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
        <Header/>
        <div className="container">
            <Contacts/>
        </div>
        </div>
      </Provider>
    );
  }
}

export default App;
