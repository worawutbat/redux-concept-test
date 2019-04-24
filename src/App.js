import React from 'react';
import { connect } from 'react-redux';
import { add, del } from './ActionCrator'

const App = (props) => {
  return (
    <div >
      <span>
        <div>{props.val}</div>
        <button onClick={props.onAddClick}>+</button>
        <button onClick={props.onDelClick}>-</button>
      </span>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {val:state}
}
const mapDispatchToProps = (dispacth) => {
  return {
    onAddClick: () => dispacth(add()),
    onDelClick: () => dispacth(del())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
