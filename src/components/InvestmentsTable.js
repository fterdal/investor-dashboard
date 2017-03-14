import React, { Component } from 'react';
import SingleInvestment from './SingleInvestment';

export default class InvestmentsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investments: this.props.data,
    }
  }

  render() {
    const investments = this.state.investments;
    return (
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
            return (
              <SingleInvestment
                 index={index}
                 id={item.id}
                 first_name={item.first_name}
                 last_name={item.last_name}
                 transaction_amount={item.prod_price}
                 email={item.email}
                 product_id={item.product_id}
                 timestamp={item.created_at}
                 transaction_id={item.transaction_id}
                 mailing_address={mailing_address}
              />
            )
          })}
        </tbody>
      </table>
    );
  }
}
