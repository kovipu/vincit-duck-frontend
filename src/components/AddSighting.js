import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import './AddSighting.css';

export default class AddSighting extends Component {
  render() {
    const speciesOptions = this.props.species.map((s) => <option>{s.name}</option>)

    return (
      <div className='form'>
        <Form inline>
          {/* <Input type='date' name='date' id='form-date' placeholder='Date' />
          <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" /> */}
          <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
          <Input type='select' name='select' id='form-species'>
            {speciesOptions}
          </Input>
          <Input type='number' name='number' id='form-count' placeholder='Count' />
          <Input type='text' name='text' id='form-description' placeholder='Description'/>
        </Form>
      </div>
    );
  }
}