import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';

const App = (props) => {
  return ( 
    <div>
      <Counter/>
      <Todos/>
    </div>

  )
}

export default App;
