import axios from "axios";

export const GET_ALL_DATA = "GET_ALL_DATA";

export const getData = () => {
  console.log("reached Get data!");
  return dispatch => {
    axios
      .get("/tasks")
      //   .then(body => {
      //     console.log("Body", body.json());
      //     // this.setState({ cardArr: body });
      //     // console.log(body.json());
      //     return body.json();
      //   })
      .then(response => {
        console.log("response data", response);
        dispatch({ type: GET_ALL_DATA, payload: response.data });
      })
      //   .then(data => {
      //     console.log("data", data);
      //     this.setState({ cardArr: data });
      //   })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getData;
