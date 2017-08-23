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
  }

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

    this.state.dataList.push(newItem);
    this.setState({ dataList: this.state.dataList });
    event.target.newItem.value = "";
  }

  render() {
    console.log("rendering App");

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Performance Demo</h2>
        </div>
        <main>
          <p className="toggler">
            Toggler: {this.state.toggler.toString()}
          </p>
          <input
            type="button"
            onClick={this.handleTogglerOnClick}
            value="Toggle Irrelevant State"
          />
          <AddItemForm handleSubmit={this.handleAddItemSubmit.bind(this)} />
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
