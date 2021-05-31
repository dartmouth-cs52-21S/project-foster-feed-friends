import React, { Component } from 'react';
// import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { createMoment } from '../../actions/moments-action';
import '../../onboarding-styles/moment-modal.scss';

class MomentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: true,
      title: '',
      description: '',
      symbol: '',
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  // onSymbolClick = (event) => {

  // }

  onAdd = (event) => {
    console.log('here');

    this.props.createMoment(this.state);
    console.log(this.state);
    this.props.handleAdd();
    this.setState({
      // show: false,
      title: '',
      description: '',
      symbol: '',
    });
  }

  onCancel = (event) => {
    this.setState({
      // show: false,
      title: '',
      description: '',
      symbol: '',
    });
    this.props.handleCancel();
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
                <button className="pink-btn" type="button" onClick={() => this.setState({ symbol: 'star' })} symbol={this.state.symbol}>star</button>
                <button className="pink-btn" type="button" onClick={() => this.setState({ symbol: 'bridge' })} symbol={this.state.symbol}>bridge</button>
                <button className="pink-btn" type="button" onClick={() => this.setState({ symbol: 'circle' })} symbol={this.state.symbol}>full circle</button>
                <button className="pink-btn" type="button" onClick={() => this.setState({ symbol: 'none' })} symbol={this.state.symbol}>none</button>
              </div>
            </div>
            <div className="moment-footer">
              <button className="green-btn" type="submit" onClick={this.onCancel}>Cancel</button>
              <button className="green-btn" type="submit" onClick={this.onAdd}>Add</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (reduxstate) => ({
  moment: reduxstate.moments.currentMoment,
  // error: reduxstate.error.error,
});

export default connect(mapStateToProps, { createMoment })(MomentModal);
