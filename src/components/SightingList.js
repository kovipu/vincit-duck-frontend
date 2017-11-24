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

  render() {
    const data = this.props.sightings.sort((a, b) => this.sortByDate(a, b, this.state.newestFirst))
      .map((s, i) => {
        return (
          <tr>
            <td>{ s.dateTime }</td>
            <td>{ s.species }</td>
            <td className='numbercell'>{ s.count }</td>
            <td>{ s.description }</td>
          </tr>
        );
      })

    return (
      <div className='content'>
        <div className='table-header'>
          Duck sightings
          
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
              <th width='180'>Date</th>
              <th width='120'>Species</th>
              <th width='50'>Count</th>
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