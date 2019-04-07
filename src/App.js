import React, { Component } from "react";
import "./App.css";
import AddForm from "./Forms/AddForm";
// const ReactDOM = require("react-dom");
// const Tasks = require("../model/Tasks");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardArr: []
    };

    this.getData = this.getData.bind(this);
    this.getData();
  }
  getData() {
    fetch("/tasks")
      .then(body => {
        // this.setState({ cardArr: body });
        // console.log(body.json());
        return body.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ cardArr: data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { cardArr } = this.state;
    const statusArr = [new Set(cardArr.map(x => x.status))];
    console.log(statusArr);
    return (
      <div id="main">
        <div>
          <AddForm />
        </div>
        <div className="column">
          <h1>Pending</h1>
          {cardArr
            .filter(card => card.status === "pending")
            .map(card => (
              <Card
                key={card.id.toString()}
                status={card.status}
                task={card.task}
                class={card.status}
              />
            ))}
        </div>
        <div className="column">
          <h1>Active</h1>
          {cardArr
            .filter(x => x.status === "active")
            .map(card => (
              <Card
                key={card.id.toString()}
                status={card.status}
                task={card.task}
                class={card.status}
              />
            ))}
        </div>
        <div className="column">
          <h1>Done</h1>
          {cardArr
            .filter(x => x.status === "done")
            .map(card => (
              <Card
                key={card.id.toString()}
                status={card.status}
                task={card.task}
                class={card.status}
              />
            ))}
        </div>
      </div>
    );
  }
}

function Column(props) {
  return (
    <div>
      <h1>{props.status}</h1>
      <div>
        <Card />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className={props.class}>
      <h2>Status: {props.status}</h2>
      <h3>Task: {props.task}</h3>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}

// function addForm() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log("Add form was clicked!");
//   }
//   return (
//     <div>
//       <form action="tasks/add" method="post">
//         <div>
//           <input name="task" />
//         </div>
//         <div>
//           <select>
//             <option value="active">Active</option>
//             <option value="pending">Pending</option>
//             <option value="done">Done</option>
//           </select>
//         </div>
//         <button type="submit">Submit</button>
//         <button type="submit">Cancel</button>
//       </form>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

export default App;
