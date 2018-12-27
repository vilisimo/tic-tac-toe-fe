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
    return (
      <div className="board">
        <Row row={0} />
        <Row row={1} />
        <Row row={2} />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(thunkedInitGame()),
});

export default connect(null, mapDispatchToProps)(Board);
