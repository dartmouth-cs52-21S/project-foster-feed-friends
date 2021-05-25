import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { renderUserInfo, signoutUser } from '../actions';

const ProfileOrg = (props) => {
  const { org } = useSelector((state) => state.org);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(org);

  useEffect(() => {
    dispatch(renderUserInfo(props.match.params.userID));
  }, []);
  const onSubmit = () => {
    dispatch(signoutUser(history));
  };

  return (
    <div>
      <div className="leftBar">
        <h1 className="title">Welcome! {org.name}</h1>
        <div className="update">
          <h3 className="boldtwentyfour">Person of contact name : </h3>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
            alt="edit button"
            width="25px"
          />
        </div>
        {/* <h3 className="boldtwentyfour">Location :</h3> */}
        {org.events ? <h3 className="sixteenpoint">{org.events.length}</h3> : null}x
        <h3 className="sixteenpoint">{org.pocname}</h3>
        <h3 className="sixteenpoint">{org.location}</h3>
        <h3 className="boldtwentyfour">Email:</h3>
        <h3 className="sixteenpoint"> {org.email} </h3>
        <button type="button" onClick={onSubmit}>Sign Out </button>

      </div>

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
