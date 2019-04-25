import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/AddTodo';


const Todos = (props) => {
  return (
    <div >
      <span>
        <div>
          <ul>
            {props.todos.map(todo => <li>{todo.text}</li>)}
          </ul>
          
        </div>
        <button onClick={props.onAdd}>Add todo</button>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}
const mapDispatchToProps = (dispacth) => {
  return {
    onAdd: () => dispacth(addTodo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
