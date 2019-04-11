import React from "react";

const Card = props => {
  return (
    <div id={props.id} className={props.class}>
      <h2>Status: {props.status}</h2>
      <h3>Task: {props.task}</h3>
      <form
        className="delete"
        action={`tasks/delete/${props.id}`}
        method="POST"
      >
        <button type="submit">Delete</button>
      </form>
      <form className="edit" action="tasks/edit" method="POST">
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Card;
