import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkedMove } from '../redux/actions/actions';
import './styles/square.css';

class Square extends Component {
  handleClick = () => {
    const { marker, onClick } = this.props;
    if (!marker) {
      onClick();
    }
  }

  render() {
    const { marker } = this.props;
    return (
      <div className="square" onClick={this.handleClick}>
        {marker}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  marker: state.moves.board[ownProps.number],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(thunkedMove(ownProps.number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
