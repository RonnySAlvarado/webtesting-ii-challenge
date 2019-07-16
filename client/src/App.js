import React from "react";
import "./App.css";
import Display from "./Display.js";
import Dashboard from "./Dashboard.js";
class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  strikesHelper = () => {
    let currentStrike = this.state.strikes;
    if (this.state.strikes + 1 > 2) {
      alert("Strike 3, you are out!");
      this.setState({ balls: 0, strikes: 0 });
    } else {
      this.setState({ strikes: currentStrike + 1 });
    }
  };

  ballsHelper = () => {
    let currentBall = this.state.balls;
    if (this.state.balls + 1 > 3) {
      alert("Ball 4, walk to first!");
      this.setState({ balls: 0, strikes: 0 });
    } else {
      this.setState({ balls: currentBall + 1 });
    }
  };

  foulsHelper = () => {
    if (this.state.strikes === 0) {
      this.setState({ strikes: 1 });
    } else if (this.state.strikes === 1) {
      this.setState({ strikes: 2 });
    } else if (this.state.strikes === 2) {
      alert("Bruh, you already at 2 strikes. Nothing happens");
    }
  };

  hitHelper = () => {
    alert("OMG A HIT A HIT");
    this.setState({ balls: 0, strikes: 0 });
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard
          strikesHelper={this.strikesHelper}
          ballsHelper={this.ballsHelper}
          foulsHelper={this.foulsHelper}
          hitHelper={this.hitHelper}
        />
      </div>
    );
  }
}

export default App;
