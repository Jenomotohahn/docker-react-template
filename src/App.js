import React, { Component } from "react";
import "./App.css";
import AddForm from "./Forms/AddForm";
import Column from "./Column";
// const ReactDOM = require("react-dom");
// const Tasks = require("../model/Tasks");
import { connect } from "react-redux";
import { getData } from "./actions/actions";
import { TitleHeader } from "./header.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // this.getData = this.getData.bind(this);
  // }

  // getData() {
  //   fetch("/tasks")
  //     .then(body => {
  //       // this.setState({ cardArr: body });
  //       // console.log(body.json());
  //       return body.json();
  //     })
  //     .then(data => {
  //       console.log("data", data);
  //       this.setState({ cardArr: data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // fetchData = () => {
  //   this.props.dispatch(getData());
  // };

  componentDidMount() {
    console.log("component props", this.props);
    console.log("render2", this.state);
    console.log("this.props.cards", this.props.cards);
    this.props.dispatch(getData());
  }

  render() {
    let cardArr = this.props.cards;
    // console.log("cardArr", cardArr);
    // const statusArr = [new Set(cardArr.map(x => x.status))];
    // console.log(statusArr);
    console.log("RENDER props.cards", this.props.cards);

    return (
      <div id="main">
        <div>
          <TitleHeader />
        </div>
        <div id="container">
          <div>
            <AddForm />
          </div>
          <div className="column">
            <h1>Pending</h1>
            {cardArr
              .filter(card => card.status === "pending")
              .map(card => (
                <Column
                  key={card.id.toString()}
                  id={card.id.toString()}
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
                <Column
                  key={card.id.toString()}
                  id={card.id.toString()}
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
                <Column
                  key={card.id.toString()}
                  id={card.id.toString()}
                  status={card.status}
                  task={card.task}
                  class={card.status}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

// function Column(props) {
//   return (
//     <div id={props.status + "column"} className="column">
//       <Card class={props.status} status={props.status} task={props.task} />
//     </div>
//   );
// }

// function Card(props) {
//   return (
//     <div className={props.class}>
//       <h2>Status: {props.status}</h2>
//       <h3>Task: {props.task}</h3>
//       <form className="delete" action="tasks/delete" method="POST">
//         <button>Delete</button>
//       </form>
//       <form className="edit" action="tasks/edit" method="POST">
//         <button>Edit</button>
//       </form>
//     </div>
//   );
// }

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

const mapStateToProps = state => {
  return {
    cards: state
  };
};

export default connect(mapStateToProps)(App);
