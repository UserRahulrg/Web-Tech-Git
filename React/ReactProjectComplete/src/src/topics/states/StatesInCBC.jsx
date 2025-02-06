import { Component } from "react";

class StatesInCBC extends Component {
  state = { count: 0 };

  increment = () => {
   this.setState({count:this.state.count+1})
  };

  render() {
    return (
      <div>
        <h2>CBC Component {this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
export default StatesInCBC;
