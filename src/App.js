import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sightings: []
    };
  }

  componentDidMount() {
    axios.get(this.props.server + '/sightings')
      .then(res => {
        console.log(res)
        const sightings = res.data;
        this.setState({ sightings });
      });
  }

  render() {
    return (
      <div className="App">
        {this.props.server}
        <ul>
          {this.state.sightings.map(sighting => 
            <li key={sighting.id}>{sighting.species} ---- {sighting.description}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
