import React from "react";
import classes from "./createMemory.module.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class CreateMemory extends React.Component {
  state = {
    imgPreview: null,
    title: "",
    content: "",
  };

  componentDidMount() {
    if (this.props.username === "") {
      this.props.history.push("/login");
    }
  }

  handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onload = () => {
        var image = new Image();
        image.src = reader.result;
        image.onload = () => {
          if (image.width > 1920 || image.height > 1080) {
            alert("Image size must be within 1920x1080");
          } else {
            this.setState({ imgPreview: reader.result });
          }
        };
      };
      reader.readAsDataURL(selected);
    } else {
      alert("Wrong file type");
    }
  };

  addMemory = () => {
    console.log(this.props.username);
    const memory = {
      imgData: this.state.imgPreview,
      title: this.state.title,
      content: this.state.content,
      date: new Date(),
    };
    axios
      .post(
        `http://localhost:5000/users/memories/add/${this.props.username}`,
        memory
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          imgData: null,
          title: "",
          content: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.title}>Background Image For Your Memory</div>
        <label className={classes.button} htmlFor="fileUpload">
          Upload Image
        </label>
        <input
          type="file"
          id="fileUpload"
          className={classes.fileUpload}
          onChange={(e) => this.handleImageChange(e)}
        />
        <div
          className={classes.imgPreview}
          style={{
            background: this.state.imgPreview
              ? `url("${this.state.imgPreview}") no-repeat center/cover`
              : "",
          }}
        ></div>
        <div className={classes.text}>
          <input
            placeholder="Title"
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
            value={this.state.title}
            className={classes.memTitle}
          />
          <textarea
            placeholder="Content"
            onChange={(e) => {
              this.setState({ content: e.target.value });
            }}
            value={this.state.content}
            className={classes.memContent}
          />
          <button className={classes.submit} onClick={this.addMemory}>
            ADD!
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateMemory);
