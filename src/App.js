import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Contact from './components/contacts/Contact';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import AddContact1 from './components/contacts/AddContact1';
import { Provider } from './components/context/context';
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
        <Header/>
        <div className="container">
            <AddContact/>
            <Contacts/>
        </div>
        </div>
      </Provider>
    );
  }
}

export default App;
