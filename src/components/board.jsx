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

  render() {
    const { player } = this.props;

    return (
      <div className="game">
        <div className="player">
          Player {player} move
        </div>
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
})

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(thunkedInitGame()),
});

export default connect(mapPropsToState, mapDispatchToProps)(Board);
