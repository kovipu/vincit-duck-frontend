import React, { Component } from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import { DateTimePicker, DropdownList, NumberPicker } from 'react-widgets';
import { InputGroup, InputGroupButton, Input } from 'reactstrap';

import './AddSighting.css';
import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.css';

Moment.locale('fi');
momentLocalizer();
simpleNumberLocalizer();

export default class AddSighting extends Component {
  formatSpecies(s) {
    if (s === undefined) { return null }

    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  render() {
    const speciesOptions = this.props.species.map(
      s => s.name)

    return (
      <div className='form'>
        <DateTimePicker 
          dropUp 
          step={ 1 } 
          format='DD/MM/YYYY, HH:mm' />
        <DropdownList 
          dropUp 
          data={speciesOptions} 
          defaultValue={speciesOptions[0]}
          textField={s => this.formatSpecies(s)}
          />
        <NumberPicker 
          min={ 0 } 
          max={ 999 } />
        <InputGroup>
          <Input />
          <InputGroupButton color='secondary'>Save</InputGroupButton>
        </InputGroup>
      </div>
    );
  }
}