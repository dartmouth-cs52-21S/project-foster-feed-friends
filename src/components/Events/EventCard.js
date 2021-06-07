import React from 'react';
import './EventCard.scss';
import { NavLink } from 'react-router-dom';

const EventCard = ({
  name, date, time, location, coordinator, id, currentOrgID,
}) => {
  return (
    <NavLink className="noDecoration" to={`${currentOrgID}/event/${id}`}>
      <div className="card eventCard">
        <div className="leftCardSection">
          <img src="  https://static.thenounproject.com/png/626764-200.png" alt="mentor badge icon" width="100px" />
          <p>{date}</p>
        </div>
        <div className="rightCardSection">
          <p>Event Name: {name}</p>
          <p>Location: {location}</p>
          <p>Time: {time}</p>
          <p>Coordinator: {coordinator}</p>
        </div>

      </div>

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
