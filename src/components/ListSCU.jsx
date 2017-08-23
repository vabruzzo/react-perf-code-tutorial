import React, { Component } from "react";

class ListSCU extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(nextProps.items === this.props.items);
  // }

  render() {
    console.log("rendering ListSCU");

    return (
      <div>
        <p>ListSCU.jsx:</p>
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

export default ListSCU;
