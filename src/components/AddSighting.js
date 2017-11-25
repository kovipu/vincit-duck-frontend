import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { DateTimePicker } from 'react-widgets'

import './AddSighting.css';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en');
momentLocalizer();

export default class AddSighting extends Component {
  render() {
    const speciesOptions = this.props.species.map((s) => <option>{s.name}</option>)

    return (
      <div className='form'>
        <DateTimePicker />
      </div>
    );
  }
}