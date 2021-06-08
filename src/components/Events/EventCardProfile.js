import React from 'react';
import './EventCard.scss';

const EventCardProfile = ({
  name, date, time, location, coordinator, id, currentOrgID,
}) => {
  return (
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

  );
};

export default EventCardProfile;
