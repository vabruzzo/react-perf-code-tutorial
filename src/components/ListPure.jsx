// import React, { PureComponent } from "react";
import React, { Component } from "react";

class ListPure extends Component {
  render() {
    console.log("rendering ListPure");

    return (
      <div>
        <p>ListPure.jsx:</p>
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

export default ListPure;
