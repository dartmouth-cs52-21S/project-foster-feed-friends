import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withRouter, NavLink } from 'react-router-dom';
import './submitResource.scss';
import { createResource } from '../actions/resource-actions';

class SubmitResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationName: '',
      location: '',
      poc: '',
      pocemail: '',
      website: '',
    };
  }

  handlerOrgNameChange = (event) => {
    this.setState({ organizationName: event.target.value });
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }

  handlelocationChange = (event) => {
    this.setState({ location: event.target.value });
  }

  handlePOCChange = (event) => {
    this.setState({ poc: event.target.value });
  }

  handlePOCEmailChange = (event) => {
    this.setState({ pocemail: event.target.value });
  }

  handleWebsiteChange = (event) => {
    this.setState({ website: event.target.value });
  }

  createEvent = () => {
    this.props.createResource(this.state);
  }

  render = () => {
    return (
      <div className="resourcePage">
        <div>
          <h1 className="title">Submit a Resource</h1>
        </div>
        <div className="submitResourceForm">
          <FormControl className="resourceSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Organization Name</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.organizationName} onChange={this.handlerOrgNameChange} />
          </FormControl>
          <FormControl className="resourceSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Location</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.location} onChange={this.handleLocationChange} />
          </FormControl>
          <FormControl className="resourceSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Point of Contact Name</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.poc} onChange={this.handlePOCChange} />
          </FormControl>
          <FormControl className="resourceSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Point of Contact Email</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.pocemail} onChange={this.handlePOCEmailChange} />
          </FormControl>
          <FormControl className="resourceSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Website</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.website} onChange={this.handleWebsiteChange} />
          </FormControl>
          <FormControl className="resourceSpecificInput" />
          <NavLink className="yellow-btn submitResourceBtn" to="/" onClick={this.createEvent}>Submit</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { createResource })(SubmitResource));
