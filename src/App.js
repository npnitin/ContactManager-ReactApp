import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Contact from './components/contacts/Contact';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import AddContact1 from './components/contacts/AddContact1';
import { Provider } from './components/context/context';
import{ BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import About from './components/pages/about';
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
            <div className="App">
            <Header/>
            <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/about" component={About}/>
            </Switch> 
            </div>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
