/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../platform-styles/network-mentor.scss';
import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import { fetchAll, fetchMentor } from '../../actions/network-actions';

const Network = (props) => {
  const [input, setInput] = useState(
    {
      text: '',
    },
  );

  const { allOrgs } = useSelector((state) => state.network);
  const { allMentors } = useSelector((state) => state.networkMentors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const onInputChange = (event) => {
    setInput({ text: event.target.value });
  };

  const handleClick = (m) => {
    // console.log('testing', m);
    console.log('pls', dispatch(fetchMentor(m)));
    // eslint-disable-next-line quotes
    return "window.open('mailto:your@email.address?subject=Reaching Out');";
  };

  const orgsList = () => {
    const map = allOrgs.filter((res) => {
      return res.orgname.toLowerCase().includes(input.text);
    }).map((org) => {
      return (
        <NavLink to={`orgs/profile/${org.id}`} exact>
          {/* <div className="col-sm-6"> */}
          <div key={org.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{org.orgname}</h5>
              <h6 id="location">{org.location}</h6>
              <p className="card-text"> {org.poc}</p>
              <i className="far fa-envelope green-btn">
                <a onClick="window.open('mailto:your@email.address?subject=Reaching Out');" href={`mailto:${org.email}`} target="_blank" rel="noopener noreferrer">Email</a>
              </i>
            </div>
          </div>
          {/* </div> */}
        </NavLink>
      );
    });
    return map;
  };

  const mentorsList = () => {
    const map = allMentors.filter((res) => {
      return res.firstName.toLowerCase().includes(input.text);
    }).map((mentor) => {
      return (
        <NavLink to={`mentor/profile/${mentor.id}`} exact>
          {/* <div className="col-sm-6"> */}
          <div key={mentor.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{mentor.firstName}{mentor.lastName} </h5>
              <h6 id="location">{mentor.hometown}</h6>
              <p className="card-text"> {mentor.bio}</p>
              <i className="far fa-envelope green-btn">
                <a className="email" onClick={handleClick(mentor.id)} href={`mailto:${mentor.email}`} target="_blank" rel="noopener noreferrer"> Email</a>
              </i>
            </div>
          </div>
          {/* </div> */}
        </NavLink>
      );
    });
    return map;
  };

  return (
    <div>
      <div id="banner">Network</div>
      <AppBar position="static" className="sortingBar">
        <div className="sortTab">
          <NavLink to="/networks/resources">
            <div>Organizations</div>
          </NavLink>
          <NavLink to="/networks/mentors">
            <div>Mentors</div>
          </NavLink>
          <NavLink to="/networks/all">
            <div>All</div>
          </NavLink>
        </div>
      </AppBar>
      <div className="searchBar input-group rounded">
        <input type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={onInputChange}
        />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search" />
        </span>
      </div>
      <ul className="orgList cardContainer">
        {orgsList()}
      </ul>
      <ul className="orgList cardContainer">
        {mentorsList()}
      </ul>
    </div>
  );
};

export default Network;
