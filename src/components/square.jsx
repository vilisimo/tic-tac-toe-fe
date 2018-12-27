import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkedMove } from '../redux/actions/actions';
import './styles/square.css';

class Square extends Component {
  handleClick = () => {
    const { marker, winner, onClick } = this.props;
    if (!marker && !winner) {
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
  winner: state.moves.winner,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(thunkedMove(ownProps.number, ownProps.x, ownProps.y)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
