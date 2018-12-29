import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/outcome.css';

class GameOutcome extends Component {

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
    return  <div className="outcome">{this.writeText()}</div>;
  }
}

const mapStateToprops = state => ({
  player: state.moves.xTurn ? 'X' : 'O',
  winner: state.moves.winner,
  board: state.moves.board,
});

export default connect(mapStateToprops, null)(GameOutcome);
