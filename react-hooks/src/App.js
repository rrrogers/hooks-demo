import React, { useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

function HooksCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className={"App"}>
        <header>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>The current count is: {count}</p>
        <button onClick={() => setCount(count + 1)}> + </button>
        <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}

function HooksWithEffectsCounter() {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(0);

    useEffect(() => {
        setDoubleCount(count * 2);
    },[count]);

    return (
        <div className={"App"}>
            <header>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <p>The current count is: {count}</p>
            <p>If you were twice as fast, you could have clicked {doubleCount} times.</p>
            <button onClick={() => setCount(count + 1)}> + </button>
            <button onClick={() => setCount(count - 1)}> - </button>
        </div>
    );
}


class ClassCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
        <div className={"App"}>
            <header>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
          <p>The current count is: {this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}> + </button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}> - </button>
        </div>
    )
  }
}

const initialState = {count: 0};
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function HooksCounterWithReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className={"App"}>
            <header>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            The current count is: {state.count}
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    );
}

export default HooksCounterWithReducer;

