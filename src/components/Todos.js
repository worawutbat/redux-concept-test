import React from 'react';
import { connect } from 'react-redux';
// import { add, del } from '../actions/ActionCreator';

const Todos = (props) => {
  return (
  <div>
  <input></input>
  <button>add</button>
    <ul>
    { /*  {props.todolists.map( todo => <li key={todo.id}>{todo.text}</li>)} */}
    </ul>
  </div>
  )
}

const mapStateToTodosProps = (state) => {
  return { todolists: state.Todos}
}

export default Todos;