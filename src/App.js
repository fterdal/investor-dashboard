import React, { Component } from 'react';
import investors from '../data.json'
import SingleInvestment from './components/SingleInvestment'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
    this.state = investors;
    // console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <p>{investors[0].first_name} {investors[0].last_name}</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Email</th>
              <th>Mailing Address</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <SingleInvestment id="11"
                                 first_name="Homer"
                                 last_name="Simpson"
                                 transaction_amount="300"
                                 email="donutzrule@springfield.city"
                                 timestamp="2015-01-22T03:56:53Z"
                                 transaction_id="WDTt4rjsJtrbiNHdT7pnoiFV"
                                 mailing_address="4321 N Common Blvd, Springfield, OR 97321" />
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
