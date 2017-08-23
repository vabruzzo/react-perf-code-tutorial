import React, { Component } from "react";

class AddItemForm extends Component {
  render() {
    console.log("rendering AddItemForm");

    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="newItem" placeholder="enter item" />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}

export default AddItemForm;
