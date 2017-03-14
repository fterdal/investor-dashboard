import React, { Component } from 'react';
import investors from '../data.json';
import SingleInvestment from './components/SingleInvestment';
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
        {console.log(this.state)}
        <p>{investments[0].first_name} {investments[0].last_name}</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Email</th>
              <th>Product ID</th>
              <th>Mailing Address</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>

            {investments.map( (item, index) => {
              const mailing_address = item.address + item.city +
                                item.state + item.zip + item.country
              if (item.first_name === 'Emily') {
                return (
                  <SingleInvestment
                     index={index}
                     id={item.id}
                     first_name={item.first_name}
                     last_name={item.last_name}
                     transaction_amount={item.prod_price}
                     email={item.email}
                     product_id={parseInt( item.product_id, 10 )}
                     timestamp={item.created_at}
                     transaction_id={item.transaction_id}
                     mailing_address={mailing_address}
                  />
                )
              } else {
                return null;
              }
              // return (
              //   <SingleInvestment
              //      index={index}
              //      id={item.id}
              //      first_name={item.first_name}
              //      last_name={item.last_name}
              //      transaction_amount={item.prod_price}
              //      email={item.email}
              //      timestamp={item.created_at}
              //      transaction_id={item.transaction_id}
              //      mailing_address={mailing_address}
              //   />
              // )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
