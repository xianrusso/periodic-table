import React, { Component } from "react"

import { elements } from "./_data"

export default class Element extends Component {
  render() {
    let { num } = this.props;
    let element = elements[num];
    return (
      <div className={`element element-${num} ${element.category}`}>
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
      </div>
    )
  }
}