import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkedInitGame, thunkedNewGame } from '../redux/actions/actions';
import History from './history';
import Board from './board';
import './styles/game.css';

class Game extends Component {

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
        <div className="outcome">{this.writeText()}</div>
        <Board />
        <button id="reset" onClick={this.props.onClick}>
          Reset the Game
        </button>
        <History />
      </div>
    );
  }
}

const mapStateToprops = state => ({
  player: state.moves.xTurn ? 'X' : 'O',
  winner: state.moves.winner,
  board: state.moves.board,
});

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(thunkedInitGame()),
  onClick: () => dispatch(thunkedNewGame()),
});

export default connect(mapStateToprops, mapDispatchToProps)(Game);
