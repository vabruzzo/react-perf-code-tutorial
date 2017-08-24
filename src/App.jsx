import React, { Component } from "react";

import List from "./components/List.jsx";
import ListSCU from "./components/ListSCU.jsx";
import ListPure from "./components/ListPure.jsx";
import AddItemForm from "./components/AddItemForm";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: ["one", "two", "three", "four", "five"],
      toggler: false,
    };

    this.handleTogglerOnClick = this.handleTogglerOnClick.bind(this);
    /**
     * Comment out the below method bind and bind it in the render method to
     * see how that would cause a new function to be made for every render, hence
     * causing unnecessary re-renders in AddItemForm.jsx when the *new* method is
     * passed down.
     */
    this.handleAddItemSubmit = this.handleAddItemSubmit.bind(this);
  }

  /**
   * The only purpose for state.toggler and this method is to change some irrelevant state
   * to demonstrate unnecessary re-renders.
   */
  handleTogglerOnClick(event) {
    event.preventDefault();

    this.setState(prevState => {
      return {
        toggler: !prevState.toggler,
      };
    });
  }

  handleAddItemSubmit(event) {
    const newItem = event.target.newItem.value;
    event.preventDefault();

    /**
     * Using push here would mutate the dataList array in place. Then, when everything
     * re-renders, shouldComponentUpdate and PureComponent wouldn't re-render because
     * the dataList array would be the same, since it's passed by reference and that's
     * what gets compared. We have to create a *new* array and set our state to that.
     * This is very important. Always think IMMUTABILITY.
     * Try un-commenting this and commenting out the immutable way to see how the app
     * breaks.
     */
    // this.state.dataList.push(newItem); <-- don't ever do this!
    // this.setState({ dataList: this.state.dataList }); <-- or this!

    this.setState(prevState => {
      return { dataList: prevState.dataList.concat(newItem) };
    });

    event.target.newItem.value = "";
  }

  render() {
    console.log("rendering App");

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Performance Demo</h2>
        </div>
        <main>
          <p className="toggler">
            Pointless state: {this.state.toggler.toString()}
          </p>
          <input
            type="button"
            onClick={this.handleTogglerOnClick}
            value="Toggle Pointless State"
          />
          <AddItemForm handleSubmit={this.handleAddItemSubmit} />
          <div className="listsWrapper">
            <List items={this.state.dataList} />
            <ListSCU items={this.state.dataList} />
            <ListPure items={this.state.dataList} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
