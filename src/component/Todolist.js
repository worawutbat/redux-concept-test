import React from 'react';
import { connect } from 'react-redux';

const Todos = (props) => {
  return (
    <div >
      <span>
        <div>
          <ul>
            {props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
          </ul>
        </div>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(Todos);
