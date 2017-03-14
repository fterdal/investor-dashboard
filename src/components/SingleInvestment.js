import React, { Component } from 'react';
import Filter from './Filter';

export default class SingleInvestment extends Component {
  constructor(props) {
    super(props);

    // This will be used to keep track of whether the extended info is expanded
    // or contracted below the main information.
    this.state = {
      infoExpanded: false,
    }
  }

  toggleExpanded(prevState) {
    // TODO: Implement toggleExpanded method
  }

  render() {
    let investmentInfo = this.props;
    return (
      <tr>
        <th>{investmentInfo.id}</th>
        {console.log(investmentInfo.id.propType)}
        <td>{investmentInfo.first_name} {investmentInfo.last_name}</td>
        <td>{investmentInfo.transaction_amount}</td>
        <td>{investmentInfo.email}</td>
        <td>{investmentInfo.product_id}</td>
        <td>{investmentInfo.mailing_address || "No address found"}</td>
        <td>{investmentInfo.timestamp}</td>
      </tr>
    );
  }
}
