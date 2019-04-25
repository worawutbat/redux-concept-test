import React from 'react'
import Counter from './component/Counter'
import AddTodo from './component/AddTodo'
import List from './component/Todolist'

const App = () => (
  <div>
    <Counter/>
    <AddTodo/>
    <List/>
  </div>
)

export default App