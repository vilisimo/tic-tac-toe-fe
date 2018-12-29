import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkedMove } from '../redux/actions/actions';
import { getMark, getWinner } from '../redux/reducers/moves';
import './styles/square.css';

class Square extends Component {
  handleClick = () => {
    const { mark, winner, onClick } = this.props;
    if (!mark && !winner) {
      onClick();
    }
  }

  render() {
    return (
      <div className="square" onClick={this.handleClick}>
        {this.props.mark}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  mark: getMark(state, ownProps.number),
  winner: getWinner(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(thunkedMove(ownProps.number, ownProps.x, ownProps.y)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
