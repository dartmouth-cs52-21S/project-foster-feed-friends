import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as ReactBootStrap from 'react-bootstrap';

// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../../actions';

class Educate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div>
        <div id="educateRowI">
          <img src="src/img/educateI.png" alt="grad cap young woman" />
          <img src="src/img/educateIII.png" alt="young men gathered around computer" />
        </div>
        <img id="educateRowII" src="src/img/educateII.png" alt="grad cap young woman" />
        <div id="educatebar">
          <div className="educateLanding">
            <h1>Learn How to Build Better Futures</h1>
          </div>
          <div id="four" className="educateLanding" />
          <div id="three" className="educateLanding" />
          <div id="two" className="educateLanding" />
          <div id="one" className="educateLanding" />
        </div>
        <div className="educateContent">
          <h2>Empathy</h2>
          <p>Foster youth have undergone immense trauma. As adults, we must be able to listen and respond when needed with care and compassion.
            Put yourself in their situation for just a minute and try to understand how the system has failed them. We must continously be kind
            with foster youth in order to help them succeed.
          </p>
        </div>
        <div className="educateContent">
          <h2>Counseling</h2>
          <p>You are not a counselor but a mentor and guiding figure. Being part of the Foster Feed Friends network means that we are here for each
            other in whatever capacity we can be. There are resources for you as a youth, or mentor to recieve the necessary aid. Create an account to get started!
          </p>
        </div>
        {/*
          // information source: https://www.networkforgood.org/topics/humanserv/foster_care/<div>
          <h1>Understand the System</h1>
          <p>The system is broken. It fails foster youth, especially those as they age out (17+) of the system</p>
        </div>
        <div>
          <h1>How to Help</h1>
          <h2>Contribute to those trying to help foster youth</h2>
          <p>Child Welfare League of America
            Providing services that aid 3.5 million neglected and abused children each year.
          </p>
          <p>
            National CASA Association
            Training and support for court appointed special advocates for children.
          </p>
          <p>
            Orphan Foundation of America
            Support to parentless teens pursuing college and vocational training.
          </p>
          <p>
            Dave Thomas Foundation for Adoption
            Working to increase adoptions of waiting children in North America.
          </p>
          <p>
            Family Builders By Adoption
            Educating the community about the needs of waiting children and placing children with permanent, secure families through adoption.
          </p>
          <p>
            National Association of Child Advocates
            Nationwide network of child advocacy organizations.
          </p>
          <p>
            North American Council on Adoptable Children
            Placing school-age children who can not remain with their birth families.
          </p>
          <p>
            Southern California Foster Family Agency
            Placing children into homes until they can be reunited with their birth families, be adopted or become independent adults.
          </p>
          <p>
            YouthBuild USA
            Helping young adults to rebuild and improve the communities in which they live.
          </p>
        </div>
        <div>
          <h1>Being empathetic</h1>
          <p>These children have gone through tremendous trauma, listen to their needs</p>
        </div> */}
      </div>
    );
  }
}

export default withRouter(connect(null, { signoutUser })(Educate));
