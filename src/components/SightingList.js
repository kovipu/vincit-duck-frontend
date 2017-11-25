import React, { Component } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';

import './SightingList.css';

export default class SightingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newestFirst: true
    };
  }

  sortByDate(a, b, newestFirst) {
    var d1 = new Date(a.dateTime),
        d2 = new Date(b.dateTime);
    if (newestFirst) {
      return d2 - d1;
    } else {
      return d1 - d2;
    }
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

  formatTime(date) {
    return new Date(date).toLocaleTimeString();
  }

  formatSpecies(species) {
    return species.charAt(0).toUpperCase() + species.slice(1); // capitalize 1st letter
  }

  render() {
    const data = this.props.sightings.sort(
      (a, b) => this.sortByDate(a, b, this.state.newestFirst))
      .map((s, i) => {
        return (
          <tr>
            <td>{ this.formatDate(s.dateTime) }</td>
            <td>{ this.formatTime(s.dateTime) }</td>
            <td>{ this.formatSpecies(s.species) }</td>
            <td className='numbercell'>{ s.count }</td>
            <td>{ s.description }</td>
          </tr>
        );
      })

    return (
      <div>
        <div className='table-header'>
          <ButtonGroup className='btn-group-xs'>
            <Button 
              color='primary'
              onClick={ () => this.setState({ newestFirst: true }) } 
              active={ this.state.newestFirst }
            >
              Newest First
            </Button>
            
            <Button 
              color='primary'
              onClick={ () => this.setState({ newestFirst: false }) } 
              active={ !this.state.newestFirst }
            >
              Oldest First
            </Button>
          </ButtonGroup>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Species</th>
              <th>Count</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { data }
          </tbody>
        </Table>
      </div>
    );
  }
}