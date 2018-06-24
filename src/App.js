import React, { Component } from 'react';
import './App.css';
import Header from "./App/Components/header";
import Content from "./App/Components/Content";

class App extends Component {
  render() {
    return (
      <div >
          <Header/>
        <Content/>


      </div>
    );
  }
}

export default App;
