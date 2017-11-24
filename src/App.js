import React, { Component } from 'react';
import axios from 'axios';

import SightingList from './components/SightingList';
import AddSighting from './components/AddSighting';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sightings: [],
      species: []
    };
  }

  componentDidMount() {
    axios.get(this.props.server + '/sightings')
    .then(res => {
      const sightings = res.data;
      this.setState({ sightings });
    });
    axios.get(this.props.server + '/species')
    .then(res => {
      const species = res.data;
      this.setState({ species });
    });
  }

  render() {
    return (
      <div className="App">
        <div class="jumbotron text-center">
          <h1>Duck Sightings</h1>
          <p>A Frontend for the Vincit summer 2018 coding challenge made using React & Bootstrap</p> 
        </div>
        <SightingList sightings={this.state.sightings} />
        <AddSighting />
      </div>
    );
  }
}

export default App;
