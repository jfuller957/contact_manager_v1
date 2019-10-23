import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Aximili Elmist"
          email="Ax@mysteriesofwonder.com"
          phone="555-867-5309"
        />
        <Contact
          name="Dakren CritStrike"
          email="DakArak@suddendeath.com"
          phone="555-898-8989"
        />
        <Contact
          name="Hihumm Strats"
          email="Hihumm@pincermoves.com"
          phone="555-828-8282"
        />
      </div>
    );
  }
}

export default App;
