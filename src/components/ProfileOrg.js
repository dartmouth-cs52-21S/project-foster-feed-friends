import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderUserInfo } from '../actions';

const ProfileOrg = (props) => {
  const { org } = useSelector((state) => state.org);
  const dispatch = useDispatch();
  console.log(org);

  useEffect(() => {
    dispatch(renderUserInfo(props.match.params.userID));
  }, []);
  return (
    <div>
      <h2>Person of contact name : {org.pocname}</h2>
      <h3>Email : {org.email} </h3>
      <h3>Location : {org.location}</h3>

    </div>
  );
};

export default ProfileOrg;

// class ProfileOrg extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     this.props.renderUserInfo(this.props.match.params.userID);
//     console.log(this.props.match.params.userID);
//   }

//   render() {
//     const result = JSON.stringify(this.props.org.pocname);
//     return (
//       <div>PocName:{result} </div>
//     );
//   }
// }
// const mapStateToProps = (reduxState) => {
//   return {
//     org: reduxState.org,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     renderUserInfo: (id) => {
//       dispatch(renderUserInfo(id));
//     },

//   };
// };
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileOrg));
