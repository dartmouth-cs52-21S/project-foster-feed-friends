import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { createEvent } from '../../actions/events-actions';
import { fetchOrgInfo } from '../../actions/user-actions';

const EventForm = (props) => {
  const [state, setState] = useState(
    {
      name: '',
      date: '',
      time: '',
      location: '',
      coordinator: '',

    },
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetchOrgInfo(props.match.params.userID);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    event.preventDefault();
  };

  const handleClick = () => {
    dispatch(createEvent(state, props.match.params.userID, history));
  };

  return (
    <div className="profileEdit">
      <div className="header profileEdit">
        <div id="su-title">Event Form</div>
      </div>
      <div className="profileEdit">
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Name</InputLabel>
          <Input name="name" id="component-simple" className="sixteenpoint" value={state.name} onChange={handleChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Date</InputLabel>
          <Input name="date" id="component-simple" className="sixteenpoint" value={state.date} onChange={handleChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Time</InputLabel>
          <Input name="time" id="component-simple" className="sixteenpoint" value={state.time} onChange={handleChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Location</InputLabel>
          <Input name="location" id="component-simple" className="sixteenpoint" value={state.location} onChange={handleChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Coordinator</InputLabel>
          <Input name="coordinator" id="component-simple" className="sixteenpoint" value={state.coordinator} onChange={handleChange} />
        </FormControl>
      </div>
      <button type="button" className="yellow-btn" onClick={handleClick}>Submit</button>
    </div>

  );
};

export default EventForm;
