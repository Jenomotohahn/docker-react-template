import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      task: props.task
    };
  }
  editForm = () => {
    this.setState({ showEdit: true });
  };

  cancel = () => {
    this.setState({ showEdit: false });
  };
  render() {
    const { showEdit } = this.state;
    let cardDisplay;
    if (!showEdit) {
      cardDisplay = (
        <div id={this.props.id} className={this.props.class}>
          <h2>Status: {this.props.status}</h2>
          <h3>Task: {this.props.task}</h3>
          <form
            className="delete"
            action={`tasks/delete/${this.props.id}`}
            method="POST"
          >
            <button type="submit">Delete</button>
          </form>
          {/* <form
          className="edit"
          action={`tasks/edit/${this.props.id}`}
          method="POST"
        > */}
          <button onClick={this.editForm}>Edit</button>
          {/* </form> */}
        </div>
      );
    } else {
      cardDisplay = (
        <div id={this.props.id} className={this.props.class}>
          <form
            className="edit"
            action={`tasks/edit/${this.props.id}`}
            method="POST"
          />
          <div>
            <label htmlFor="select">Status:</label>
            <select name="status" value={this.props.status}>
              <option name="status" value="active">
                Active
              </option>
              <option name="status" value="pending">
                Pending
              </option>
              <option name="status" value="done">
                Done
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="task">Task: </label>
            <input name="task" contentEditable="true" value={this.props.task} />
          </div>
          <button onClick={this.cancel}>Cancel</button>
        </div>
      );
    }
    return (
      <div>{cardDisplay}</div>

      //   <div id={this.props.id} className={this.props.class}>
      //     <h2>Status: {this.props.status}</h2>
      //     <h3>Task: {this.props.task}</h3>
      //     <form
      //       className="delete"
      //       action={`tasks/delete/${this.props.id}`}
      //       method="POST"
      //     >
      //       <button type="submit">Delete</button>
      //     </form>
      /* <form
          className="edit"
          action={`tasks/edit/${this.props.id}`}
          method="POST"
        > */
      /* <button onClick={editForm}>Edit</button> */
      /* </form> */
      /* </div> */
    );
  }
}

export default Card;
