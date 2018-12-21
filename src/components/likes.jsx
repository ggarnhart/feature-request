import React, { Component } from "react";

class Likes extends Component {
  render() {
    return (
      <div className="likesDiv">
        <span className="timePosted" />
        <span>
          {this.props.value} {this.handleHeart()}
        </span>
      </div>
    );
  }

  handleHeart = () => {
    if (this.props.clicked) {
      return (
        <i
          onClick={() => this.props.onLikeToggle(this.props.likes)}
          className="fas fa-heart"
        />
      );
    } else {
      return (
        <i
          onClick={() => this.props.onLikeToggle(this.props.likes)}
          className="far fa-heart"
        />
      );
    }
  };
}

export default Likes;
