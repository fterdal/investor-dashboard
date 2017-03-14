import React, { Component } from 'react';
import investors from '../data.json';
import SingleInvestment from './components/SingleInvestment';
import InvestmentsTable from './components/InvestmentsTable';
import Filter from './components/Filter';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: investors};
  }

  render() {
    const investments = this.state.data;
    return (
      <div className="App">
        <InvestmentsTable data={investments} />
      </div>
    );
  }
}

export default App;
