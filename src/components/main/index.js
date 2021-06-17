import React from "react";
import Header from "./Header";
import Memory from "./Memory";
import { withRouter } from "react-router-dom";
import End from "./End";

class Main extends React.Component {
  componentDidMount() {
    if (this.props.username === "") {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.memories.map((mem, i) => (
          <Memory mem={mem} index={i + 1} key={i} />
        ))}
        <End history={this.props.history} />
      </div>
    );
  }
}

export default withRouter(Main);
