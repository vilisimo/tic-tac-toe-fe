import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './row';
import './styles/board.css';
import { thunkedInitGame } from '../redux/actions/actions';

class Board extends Component {

  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  writeText = () => {
    const { player, winner, board } = this.props;
    if (!winner && !board.includes(null)) {
      return "It's a draw!";
    } else {
      return winner
        ? `Player ${winner} won the game!`
        : `Player ${player}'s turn`;
    }
  }

  render() {
    return (
      <div className="game">
        <div className="player">{this.writeText()}</div>
        <div className="board">
          <Row row={0} />
          <Row row={1} />
          <Row row={2} />
        </div>
      </div>
    );
  }
}

const mapPropsToState = state => ({
  player: state.moves.xTurn ? 'X' : 'O',
  winner: state.moves.winner,
  board: state.moves.board,
})

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(thunkedInitGame()),
});

export default connect(mapPropsToState, mapDispatchToProps)(Board);
