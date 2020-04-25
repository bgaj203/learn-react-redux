import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login } from './actions/index'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter { counter }</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <button onClick={() => dispatch(login())}>Log In</button>
      { isLogged? <p>Logged in so you can see these</p> : null }
    </div>
  );
}

export default App;
