import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

const Column = props => {
  return (
    <div id={props.status + "column"} className="column">
      <Card class={props.status} status={props.status} task={props.task} />
    </div>
  );
};

export default Column;
