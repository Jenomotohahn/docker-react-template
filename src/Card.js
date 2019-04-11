import React, { Component } from "react";

const Card = props => {
  return (
    <div className={props.class}>
      <h2>Status: {props.status}</h2>
      <h3>Task: {props.task}</h3>
      <form className="delete" action="tasks/delete" method="POST">
        <button onClick={onClickButton} type="button">
          Delete
        </button>
      </form>
      <form className="edit" action="tasks/edit" method="POST">
        <button onClick={onClickButton} type="button">
          Edit
        </button>
      </form>
    </div>
  );
};

function onClickButton(event) {
  event.preventDefault();
}

export default Card;
