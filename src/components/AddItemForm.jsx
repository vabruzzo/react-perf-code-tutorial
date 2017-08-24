/**
 * Notice we're using a PureComponent here. PureComponents check the current state and props
 * against the next state and props. It won't re-render if they're equal, according to a shallow
 * compare. The only prop this component gets is the handleSubmit function. If that function
 * is bound in the *render* function of the App component, instead of the constructor,
 * a new function would be created each time, and the PureComponent would re-render even though
 * it really shouldn't.
 */
import React, { PureComponent } from "react";

class AddItemForm extends PureComponent {
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
