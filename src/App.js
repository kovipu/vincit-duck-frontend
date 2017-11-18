import React, { Component } from 'react';
import axios from 'axios';

import SightingList from './components/SightingList';
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
      this.setState({ 
        sightings: this.state.sightings.forEach(s => { s.dateTime = ""; })
      })
  }

  render() {
    return (
      <div className="App">
        <SightingList sightings={this.state.sightings} />
      </div>
    );
  }
}

export default App;
