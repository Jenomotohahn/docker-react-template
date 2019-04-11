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
      <button type="submit">Submit</button>
      <button type="submit">Cancel</button>
    </form>
  </div>
);

function onClickButton(event) {
  event.preventDefault();
}

export default AddForm;
