import React, { Component } from 'react';
import logo from './logo.svg';
import investors from '../data.json'
import SingleInvestmentBar from './components/SingleInvestmentBar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.state = investors;
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <p>Hello, React!</p>
        <p>Here's an investor:</p>
        <p>{investors[0].first_name} {investors[0].last_name}</p>
        <SingleInvestmentBar first_name="Homer"
                             last_name="Simpson"
                             transaction_amount="300"
                             email="donutzrule@springfield.city"
                             dateTime="2015-01-22T03:56:53Z"
                             transaction_id="WDTt4rjsJtrbiNHdT7pnoiFV"
                             mailing_address="4321 N Common Blvd, Springfield, OR 97321" />
      </div>
    );
  }
}

export default App;
