import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { renderYouthInfo, signoutUser } from '../../actions';

const ProfileYouth = (props) => {
  const { youth } = useSelector((state) => state.org);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(youth);

  useEffect(() => {
    dispatch(renderYouthInfo(props.match.params.userID));
  }, []);

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };

  return (
    <div>
      <div className="leftBar">
        {/* <h1 className="title">Welcome!  {youth.name ? <h1>{youth.name}</h1> : null } </h1> */}
        <div className="update">
          <h3 className="boldtwentyfour">Person of contact name : </h3>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
            alt="edit button"
            width="25px"
          />
        </div>
        {/* <h3 className="boldtwentyfour">Location :</h3> */}
        {/* <h3 className="sixteenpoint">{youth.events.length}</h3>
        <h3 className="sixteenpoint">{youth.pocname}</h3>
        <h3 className="sixteenpoint">{youth.location}</h3> */}
        <h3 className="boldtwentyfour">Email:</h3>
        {/* <h3 className="sixteenpoint"> {youth.email} </h3> */}
        <h3 className="boldtwentyfour">Badges</h3>
        <div className="badgeContainer">
          <div className="badge">
            <div> Badge 1</div>
            <h4>One Connection </h4>
          </div>
          <div>
            <div> Badge 2</div>
            <h4>Ten Connection </h4>
          </div>
          <div>
            <div> Badge 3</div>
            <h4>twenty-five Connection </h4>
          </div>
        </div>
        <button type="button" onClick={onSubmit}>Sign Out </button>
      </div>
    </div>
  );
};

export default ProfileYouth;
