import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var sightings = [];
    fetch('http://localhost:8081/sightings')
    .then(res => res.json())
    .then((out) => { sightings.push(out) }).catch(err => console.error(err));

    console.log(typeof(sightings))
    console.log('ASDASDSAD ', sightings)

    const sightings_ = sightings.foreach(s => { console.log(s)})
    // const sightings_ = sightings.map((s, i) => {
    //   return <li>{s}</li>
    // });
    console.log(typeof(sightings_))
    console.log(sightings_)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>{sightings_}</ul>
      </div>
    );
  }
}

export default App;
