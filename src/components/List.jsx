/**
 * We're not doing anything to prevent re-renders here. The React virtual DOM will
 * prevent this component from actually being re-rendered in the DOM. For small components
 * like this we don't really need to add performance enhancements. In fact, shouldComponentUpdate
 * can sometimes be less performant than React just doing its thing. This tutorial is for
 * learning purposes. Don't prematurely optimize! But know how to optimize nonetheless.
 */
import React, { Component } from "react";

class List extends Component {
  render() {
    console.log("rendering List");

    return (
      <div>
        <p>List.jsx:</p>
        <ul className="list">
          {this.props.items.map(item => {
            return (
              <li>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
