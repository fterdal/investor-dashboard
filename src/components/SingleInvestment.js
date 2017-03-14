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
    // console.log("mailing_address: " + investmentInfo.mailing_address);
    let mailing_address = "";
    if (investmentInfo.mailing_address === "") {
      mailing_address = "No address found";
    } else {
      mailing_address = investmentInfo.mailing_address;
    }
    return (
      <tr>
        <th>{investmentInfo.id}</th>
        <td>{investmentInfo.first_name} {investmentInfo.last_name}</td>
        <td>{investmentInfo.transaction_amount}</td>
        <td>{investmentInfo.email}</td>
        <td>{investmentInfo.product_id}</td>
        <td>{mailing_address}</td>
        <td>{investmentInfo.timestamp}</td>
      </tr>
    );
  }
}
