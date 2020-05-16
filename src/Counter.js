import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 5
    }

    setInterval(() => {
      let { counter } = this.state;
      counter--;
      this.setState({counter})
    }, 1000)
  }

  render() {
    if (this.state.counter > 0) {
      return <h1>{this.state.counter}</h1>
    } else {
      return <h1>Boom!</h1>
    }
  }
}

export default Counter;
