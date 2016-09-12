import React, { Component } from 'react';
import Hello from './Hello';
import Info from './Info';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Meteor!</h1>
        <Hello
          counter={this.state.counter}
          onClick={this.handleClick}
        />
        <Info />
      </div>
    );
  }
}

export default Main;
