import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import DatePicker from 'react-datepicker';
import { createEvent } from '../../actions/events-actions';
import { fetchOrgInfo } from '../../actions/user-actions';
// import 'react-datepicker/dist/react-datepicker.css';

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

  // const DateTimePicker = () => {
  //   const [startDate, setStartDate] = useState(new Date());
  //   return (
  //     <DatePicker
  //       selected={startDate}
  //       onChange={(date) => setStartDate(date)}
  //       timeInputLabel="Time:"
  //       dateFormat="MM/dd/yyyy h:mm aa"
  //       showTimeInput
  //     />
  //   );
  // };

  return (
    <div>
      <form>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Name</InputLabel>
          <Input name="name" id="component-simple" className="sixteenpoint" value={state.name} onChange={handleChange} />
        </FormControl>
        {/* <DateTimePicker onChange={(startDate) => setState({ date: startDate })} /> */}
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
        {/* <FormControl className="signUpSpecificInput">
        <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Description</InputLabel>
        <Input id="component-simple" className="sixteenpoint" value={this.state.description} onChange={this.handleDescriptionChange} />
      </FormControl> */}
      </form>
      <button type="button" className="yellow-btn" onClick={handleClick}>Submit</button>
    </div>

  );
};

// class eventForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       date: '',
//       time: '',
//       location: '',
//       coordinator: '',
//     };
//   }

//   componentDidMount = () => {
//     renderOrgInfo(this.props.match.params.userID);
//   }

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   }

//   handleDateChange = (event) => {
//     this.setState({ date: event.target.value });
//   }

//   handleTimeChange = (event) => {
//     this.setState({ time: event.target.value });
//   }

//   handleLocationChange = (event) => {
//     this.setState({ location: event.target.value });
//   }

//   handleCoordinatorChange = (event) => {
//     this.setState({ coordinator: event.target.value });
//   }

//   handleDescriptionChange = (event) => {
//     this.setState({ description: event.target.value });
//   }

//   createEventButton = (event) => {
//     this.props.createEvent(this.state, this.props.match.params.userID, this.props.history);
//   }

//   render = () => {
//     return (
//       <div>
//         <form>
//           <FormControl className="signUpSpecificInput">
//             <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Name</InputLabel>
//             <Input id="component-simple" className="sixteenpoint" value={this.state.name} onChange={this.handleNameChange} />
//           </FormControl>
//           <FormControl className="signUpSpecificInput">
//             <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Date</InputLabel>
//             <Input id="component-simple" className="sixteenpoint" value={this.state.date} onChange={this.handleDateChange} />
//           </FormControl>
//           <FormControl className="signUpSpecificInput">
//             <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Time</InputLabel>
//             <Input id="component-simple" className="sixteenpoint" value={this.state.time} onChange={this.handleTimeChange} />
//           </FormControl>
//           <FormControl className="signUpSpecificInput">
//             <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Location</InputLabel>
//             <Input id="component-simple" className="sixteenpoint" value={this.state.location} onChange={this.handleLocationChange} />
//           </FormControl>
//           <FormControl className="signUpSpecificInput">
//             <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Coordinator</InputLabel>
//             <Input id="component-simple" className="sixteenpoint" value={this.state.coordinator} onChange={this.handleCoordinatorChange} />
//           </FormControl>
//           {/* <FormControl className="signUpSpecificInput">
//             <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Description</InputLabel>
//             <Input id="component-simple" className="sixteenpoint" value={this.state.description} onChange={this.handleDescriptionChange} />
//           </FormControl> */}
//         </form>
//         <button type="button" className="yellow-btn" onClick={this.createEventButton}>Submit</button>

//       </div>

//     );
//   }
// }

export default EventForm;
