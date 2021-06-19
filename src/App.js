import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Login from "./components/auth/Login";
import Main from "./components/main";
import CreateMemory from "./components/create/createMemory";
import "./App.css";

class App extends React.Component {
  state = {
    username: "",
    memories: [],
  };

  getUserMemories = (name) => {
    this.setState({ username: name }, () => {
      // "http://localhost:5000/users/memories/"
      // "https://ancient-lowlands-88829.herokuapp.com/users/memories/"
      axios
        .get(
          "https://ancient-lowlands-88829.herokuapp.com/users/memories/" +
            this.state.username
        )
        .then((res) => {
          this.setState({ memories: [] });
          let temp = [...this.state.memories];
          res.data.map((mem) =>
            temp.push({
              imgb64: mem.img,
              title: mem.title,
              content: mem.content,
              date: mem.date,
            })
          );
          this.setState({ memories: temp });
        })
        .catch((err) => console.log(err));
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            render={(props) => (
              <Main
                username={this.state.username}
                memories={this.state.memories}
              />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login updateUsername={(name) => this.getUserMemories(name)} />
            )}
          />
          <Route
            path="/create"
            render={(props) => <CreateMemory username={this.state.username} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
