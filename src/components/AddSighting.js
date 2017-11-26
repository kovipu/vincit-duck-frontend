import React, { Component } from 'react';
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import { DateTimePicker, DropdownList, NumberPicker } from 'react-widgets';

import './AddSighting.css';
import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.css';

Moment.locale('en');
momentLocalizer();
simpleNumberLocalizer();

export default class AddSighting extends Component {
  render() {
    return (
      <div className='form'>
        <DateTimePicker dropUp step={1} />
        <DropdownList 
          dropUp 
          data={this.props.species} 
          textField='name'
          defaultValue={this.props.species[0]} />
        <NumberPicker min={0} max={999} />
        <InputGroup>
          <Input />
          <InputGroupButton color='secondary'>Save</InputGroupButton>
        </InputGroup>
      </div>
    );
  }
}