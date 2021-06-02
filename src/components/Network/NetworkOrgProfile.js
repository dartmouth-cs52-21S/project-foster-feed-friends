import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchOrg } from '../../actions/network-actions';
import { fetchOrgEvents } from '../../actions/events-actions';

import EventCardYouth from '../Events/EventCardYouth';
// import eventForm from './eventForm';

// const NetworkOrgProfile = (props) => {
//   const org = useSelector((state) => state.org);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchOrg(props.match.params.userID)); // reseting user
//   }, []);

class NetworkOrgProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchOrg(this.props.match.params.userID);
    this.props.fetchOrgEvents(this.props.match.params.userID);
  }

  render = () => {
    return (
      <div>
        <div className="profilePageContainer">
          <div className="leftBar">
            <h1 className="title">Welcome! {this.props.currentOrg?.orgname}</h1>
            {this.props.currentOrg.events ? <h3 className="sixteenpoint">{this.props.currentOrg.events.length} Events</h3> : null}

            <h3 className="boldtwentyfour">Person of contact name : </h3>

            <h3 className="sixteenpoint">{this.props.currentOrg.poc}</h3>
            <h3 className="sixteenpoint">{this.props.currentOrg.location}</h3>
            <h3 className="boldtwentyfour">Email:</h3>
            <h3 className="sixteenpoint"> {this.props.currentOrg.email} </h3>
          </div>
          <div className="eventsContainer">

            <div className="EventsBlock">
              <h2>Upcoming Events </h2>
              <div className="underlineLight profileBar" />
              <div className="eventsRow">
                {this.props.all.length === 0 ? <h3 className="sixteenpoint">No Upcoming Events</h3> : this.props.all.map((data, key) => {
                  return (
                    <EventCardYouth
                    // eslint-disable-next-line react/no-array-index-key
                      key={key}
                      name={data.name}
                      date={data.date}
                      time={data.time}
                      location={data.location}
                      coordinator={data.coordinator}
                    />
                  );
                }) }
              </div>
              <div />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    currentOrg: reduxState.network.currentOrg,
    all: reduxState.events.all,
  };
}
export default withRouter(connect(mapStateToProps, { fetchOrg, fetchOrgEvents })(NetworkOrgProfile));
