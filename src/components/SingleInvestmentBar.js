import React, { Component } from 'react';


export default class SingleInvestmentBar extends Component {
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
    let componentName = "SingleInvestmentBar";
    return (
      <div>
        <span>{this.props.first_name} {this.props.last_name} {this.props.transaction_amount} </span>
      </div>
    );
  }


}
