import React from "react";
import "./App.css";
import Card from "./Card";

const Column = props => {
  console.log("column props", props);
  return (
    <div id={props.status + "column"} className="column">
      <Card
        id={props.id}
        class={props.status}
        status={props.status}
        task={props.task}
      />
    </div>
  );
};

export default Column;
