import React from 'react';
import './EventCard.scss';
import { NavLink } from 'react-router-dom';

const EventCard = ({
  name, date, time, location, coordinator, id, currentOrgID,
}) => {
  return (
    <NavLink to={`${currentOrgID}/event/${id}`}>
      <div className="card eventCard">
        {/* <div className="card-body"> */}
        <div className="card-body">
          <p className="card-title"><em>{name}</em></p>
          <p>{coordinator}</p>
          <p>{date}</p>
          <p>{time}</p>
          <p>{location}</p>
        </div>

        {/* <p>{this.state.description}</p> */}

        {/* {this.state.react === 'true' ? <div className="reacts"> </div> : null } */}
      </div>
      {/* </div> */}

    </NavLink>

  );
};
// class EventCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // org: '',
//       // date: '',
//       // time: '',
//       // location: '',
//       // contact: '',
//       // description: '',
//       // react: '',
//     };
//   }

//     render = () => {
//       return (
//         <div>
//           <div className="leftCard">
//             <p>{this.props.event.date}</p>
//             <p>{this.props.event.time}</p>
//             <p>{this.props.event.location}</p>
//           </div>
//           <div className="rightCard">
//             <p>{this.props.orgname}</p>
//             {/* <p>{this.state.description}</p> */}
//             <p>{this.state.contact}</p>
//             {/* {this.state.react === 'true' ? <div className="reacts"> </div> : null } */}
//           </div>
//         </div>
//       );
//     }
// }

export default EventCard;
