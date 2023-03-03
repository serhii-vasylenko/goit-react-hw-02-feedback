import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()> 0 ? (this.state.good * 100) / this.countTotalFeedback(): 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>
          <h2>Please leave your feedback</h2>
          <ul>
            <li>
              <button>Good</button>
            </li>
            <li>
              <button>Neutral</button>
            </li>
            <li>
              <button>Bad</button>
            </li>
          </ul>
          <div>
            <h3>Ststistics</h3>
            <p>
              Good: <span>{good}</span>
            </p>
            <p>
              Neutral: <span>{neutral}</span>
            </p>
            <p>
              Bad: <span>{bad}</span>
            </p>
            <p>
              Total: <span>{this.countTotalFeedback()}</span>
            </p>
            <p>
              Positive feedback:{' '}
              <span>{this.countPositiveFeedbackPercentage()}</span>%
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
