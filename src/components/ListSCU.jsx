import React, { Component } from "react";

class ListSCU extends Component {
  /**
   * Returns true or false, true will lead to re-render of component,
   * false will prevent re-render. This can be dangerous if you're *not*
   * being disciplined with regard to immutability. See App.jsx for more info.
   * about that. shouldComponentUpdate lets you get really fine-grained
   * with your comparison, but it can get tricky as the components grow
   * larger. If you keep your components small and modular, you can give yourself
   * an advantage when it comes time to optimize performance.
   * @param {object} nextProps - the next props object
   * @param {object} nextState  - the next state object
   */
  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.items === this.props.items);
  }

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
