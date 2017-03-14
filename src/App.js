import React, { Component } from 'react';
import SingleInvestment from './components/SingleInvestment';
import InvestmentsTable from './components/InvestmentsTable';
import Filter from './components/Filter';

import investors from '../data.json';
import product_map from '../product_map.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: investors};
  }

  render() {
    const investments = this.state.data;
    const filteredInvestments = investments.filter(item => {
      return item.product_id === 2;
    })
    return (
      <div className="App">

        <InvestmentsTable investments={filteredInvestments} />
      </div>
    );
  }
}

export default App;
