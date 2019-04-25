import React from 'react';
import { connect } from 'react-redux';
import { add, del } from '../actions/ActionCreator';


const Counter = (props) => {
  return (
    <div >
      <span>
        <div>
          {props.counter}
        </div>
        <button onClick={props.onAddClick}>+</button>
        <button onClick={props.onDelClick}>-</button>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {counter: state.counter}
}
const mapDispatchToProps = (dispacth) => {
  return {
    onAddClick: () => dispacth(add()),
    onDelClick: () => dispacth(del())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
