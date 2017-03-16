import React, { Component } from 'react';

export default class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Filter by name: </label>
        <input type="text"></input>
        <br />
        <label>Filter by company: </label>
        <select>
          {this.props.companies.map( item => {
            console.log(item);
            return ( <option>{item}</option> )
          })}
        </select>
      </div>
    )
  }
}
