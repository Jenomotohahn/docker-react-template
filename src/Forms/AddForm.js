import React from "react";

export const AddForm = () => (
  <div>
    <h2>Create New</h2>
    <form action="tasks" method="post">
      <div>
        <label htmlFor="task">Task: </label>
        <input name="task" />
      </div>
      <div>
        <label htmlFor="select">Status:</label>
        <select name="status">
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
      <button type="submit">Submit</button>
      <button type="submit">Cancel</button>
    </form>
  </div>
);

function onClickButton(event) {
  event.preventDefault();
}

export default AddForm;
