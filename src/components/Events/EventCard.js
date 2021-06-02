import React from 'react';

const EventCard = ({
  name, date, time, location, coordinator,
}) => {
  return (
    <div>
      <div className="leftCard">
        <p>{date}</p>
        <p>{time}</p>
        <p>{location}</p>
      </div>
      <div className="rightCard">
        <p>{name}</p>
        {/* <p>{this.state.description}</p> */}
        <p>{coordinator}</p>
        {/* {this.state.react === 'true' ? <div className="reacts"> </div> : null } */}
      </div>
    </div>

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
