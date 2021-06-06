/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import { createMoment } from '../../actions/moments-action';
import '../../onboarding-styles/moment-modal.scss';

// lines 16-60 adopted from https://material-ui.com/components/popover/
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const SimplePopover = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {/* <Button className="fas fa-info-circle" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button> */}
      <i id="popover-icon" className="fas fa-info-circle" aria-describedby={id} variant="contained" color="primary" onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          <div className="popper">
            <div className="popper-header">
              <h2>Symbols Quick Guide</h2>
              <h4>Each symbol represents a unique type of moment. <br /> These may be used as you see fit.</h4>
            </div>
            <div className="popper-content">
              <div className="popper-symbol">
                <i className="fas fa-star pop-sym" />
              </div>
              <div className="popper-text">
                <h3>Star</h3>
                <h5>A defining moment that conveys an accomplishment to you.</h5>
              </div>
            </div>
            <div className="popper-content">
              <div className="popper-symbol">
                <i className="fas fa-archway pop-sym" />
              </div>
              <div className="popper-text">
                <h3>Bridge</h3>
                <h5>A pivotal moment that served as a stepping stone to the next.</h5>
              </div>
            </div>
            <div className="popper-content">
              <div className="popper-symbol">
                <i className="fas fa-spinner pop-sym" />
              </div>
              <div className="popper-text">
                <h3>Full-Circle</h3>
                <h5>A defining moment that conveys an accomplishment to you.</h5>
              </div>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
};

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

  onAdd = (event) => {
    this.props.createMoment(this.state);
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
                  <Input id="component-simple" className="modal-input" multiline rows={4} value={this.state.description} onChange={this.handleDescriptionChange} />
                </FormControl>
              </div>
              <div id="popover-container">
                <h6>Choose the symbol best representing this moment.</h6>
                <SimplePopover />
              </div>
              <div className="moment-buttons">
                <div className="img-btn">
                  <button className="fas fa-star sym-btn" type="button" onClick={() => this.setState({ symbol: 'star' })} symbol={this.state.symbol} />
                  <p>star</p>
                </div>
                <div className="img-btn">
                  <button className="fas fa-archway sym-btn" type="button" onClick={() => this.setState({ symbol: 'bridge' })} symbol={this.state.symbol} />
                  <p>bridge</p>
                </div>
                <div className="img-btn">
                  <button className="fas fa-spinner sym-btn" type="button" onClick={() => this.setState({ symbol: 'circle' })} symbol={this.state.symbol} />
                  <p>full-circle</p>
                </div>
                <div className="img-btn">
                  <button className="fas fa-slash sym-btn" type="button" onClick={() => this.setState({ symbol: 'none' })} symbol={this.state.symbol} />
                  <p>none</p>
                </div>
              </div>
            </div>
            <div className="moment-footer">
              <button className="lightgreen-btn" type="submit" onClick={this.onCancel}>Cancel</button>
              <button className="lightgreen-btn" type="submit" onClick={this.onAdd}>Add</button>
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
