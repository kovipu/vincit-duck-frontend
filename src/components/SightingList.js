import React, { Component } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';

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
    return (
      <div>
        <ButtonGroup>
          <Button 
            onClick = {() => this.setState({ newestFirst: true })} 
            active = {this.state.newestFirst}>
            Newest First
          </Button>
          <Button 
            onClick = {() => this.setState({ newestFirst: false })} 
            active = {!this.state.newestFirst}>
            Oldest First
          </Button>
        </ButtonGroup>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Species</th>
              <th>Count</th>
              <th>Description</th>
            </tr>
          </thead>
          {this.props.sightings.sort((a, b) => this.sortByDate(a, b, this.state.newestFirst))
                              .map((s, i) => {
            return (
              <tr>
                <td>{s.dateTime}</td>
                <td>{s.species}</td>
                <td>{s.count}</td>
                <td>{s.description}</td>
              </tr>
            );
          })}
        </Table>
      </div>
    );
  }
}