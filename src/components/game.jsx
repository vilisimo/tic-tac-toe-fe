import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkedInitGame, thunkedNewGame } from '../redux/actions/actions';
import Board from './board';
import GameOutcome from './outcome';
import History from './history';
import './styles/game.css';

class Game extends Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className="game">
        <GameOutcome />
        <Board />
        <button id="reset" onClick={this.props.onClick}>
          Reset the Game
        </button>
        <History />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(thunkedInitGame()),
  onClick: () => dispatch(thunkedNewGame()),
});

export default connect(null, mapDispatchToProps)(Game);
