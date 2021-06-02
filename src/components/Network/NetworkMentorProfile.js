import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMentor } from '../../actions/network-actions';

// const NetworkOrgProfile = (props) => {
//   const org = useSelector((state) => state.org);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchOrg(props.match.params.userID)); // reseting user
//   }, []);

class NetworkMentorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchMentor(this.props.match.params.userID);
  }

  render = () => {
    return (
      <div>
        {console.log(this.props.match)};
        <div className="profilePageContainer">
          <div className="leftBar">
            <h1 className="title">Welcome! {this.props.currentMentor?.firstName}</h1>
            {this.props.currentMentor.events ? <h3 className="sixteenpoint">{this.props.currentMentor.events.length} Events</h3> : null}
            <h3 className="boldtwentyfour">Person of contact name : </h3>

            <h3 className="sixteenpoint">{this.props.currentMentor.bio}</h3>
            <h3 className="sixteenpoint">{this.props.currentMentor.hometown}</h3>
            <h3 className="boldtwentyfour">Email:</h3>
            <h3 className="sixteenpoint"> {this.props.currentMentor.email} </h3>
          </div>
          <div className="eventsContainer">
            <div className="EventsBlock">
              <h2>Mentor Path</h2>
              <div className="underlineLight profileBar" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    currentMentor: reduxState.network.currentMentor,

  };
}
export default withRouter(connect(mapStateToProps, { fetchMentor })(NetworkMentorProfile));
