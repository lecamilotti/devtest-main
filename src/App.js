import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  
  render() {
    try {
      if (this.state.counter === 5) {
        throw new Error('Crashed.');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }catch(e) {
      return <h1>{e.message}</h1>;
    }

    }
    
}

function App() {
  return (
    <div>
      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw an error when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
        <Counter />
        <Counter />
      <hr />
    </div>
  );
}

export default App;
