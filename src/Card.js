import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      task: this.props.task
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ task: e.target.task });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
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
          >
            <div>
              <label htmlFor="select">Status:</label>
              <select name="status" defaultValue={this.props.status}>
                <option name="status" defaultValue="active">
                  active
                </option>
                <option name="status" defaultValue="pending">
                  pending
                </option>
                <option name="status" defaultValue="done">
                  done
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="task">Task: </label>
              <input
                name="task"
                defaultValue={this.props.task}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
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
