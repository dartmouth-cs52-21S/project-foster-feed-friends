import React, { Component } from 'react';
// import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { createPost } from '../../actions';

class MomentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  onAdd = (event) => {
    this.setState({
      show: false,
      title: '',
      description: '',
    });
    this.props.createPost(this.state, this.props.history);
  }

  onCancel = (event) => {
    this.setState({
      show: false,
      title: '',
      description: '',
    });
  }

  render = () => {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className="moment-modal">
          <div className="moment-content">
            <div className="moment-header">
              <h4 id="modal-title">Moment</h4>
            </div>
            <div className="moment-body">
              <div className="moment-text">
                <FormControl className="ModalSpecificInput">
                  <InputLabel className="modal-input" htmlFor="component-simple">Title</InputLabel>
                  <Input id="component-simple" className="modal-input" value={this.state.title} onChange={this.handleTitleChange} />
                </FormControl>
                <FormControl className="ModalSpecificInput">
                  <InputLabel className="modal-input" htmlFor="component-simple">Description</InputLabel>
                  <Input id="component-simple" className="modal-input" value={this.state.description} onChange={this.handleDescriptionChange} />
                </FormControl>
              </div>
              <h6>Choose the symbol best representing this moment.</h6>
              <div className="moment-buttons">
                <button className="pink-btn" type="button">star</button>
                <button className="pink-btn" type="button">bridge</button>
                <button className="pink-btn" type="button">full circle</button>
                <button className="pink-btn" type="button">none</button>
              </div>
            </div>
            <div className="moment-footer">
              <button className="green-btn" type="submit" onClick={this.props.onCancel}>Cancel</button>
              <button className="green-btn" type="submit" onClick={this.props.onAdd}>Add</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

// const mapStateToProps = (reduxstate) => ({
//   moment: reduxstate.moments.currentMoment,
//   error: reduxstate.error.error,
// });

export default connect(null, { createPost })(MomentModal);
