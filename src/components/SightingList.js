import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class SightingList extends Component {
  sortByDate(a, b, order) {   // order is desc or asc
    var d1 = new Date(a.dateTime),
        d2 = new Date(b.dateTime);
    if (order === 'desc') {
      return d1 - d2;
    } else {
      return d2 - d1;
    }
  }

  render() {
    return (
      <BootstrapTable ref='sightingTable' data={this.props.sightings}>
        <TableHeaderColumn dataField='id' hidden isKey> {/* a key field is required */}
          ID
        </TableHeaderColumn>
        <TableHeaderColumn 
          dataField='dateTime' 
          width='200' 
          dataSort 
          sortFunc={this.sortByDate} 
          dataFormat={(t) => new Date(t).toLocaleString() /* make the ISO dates human readable */}
        >
          Time
        </TableHeaderColumn>
        <TableHeaderColumn dataField='species' width='100'>
          Species
        </TableHeaderColumn>
        <TableHeaderColumn dataField='count' width='80' dataAlign='right'>
          Count
        </TableHeaderColumn>
        <TableHeaderColumn dataField='description'>
          Description
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}