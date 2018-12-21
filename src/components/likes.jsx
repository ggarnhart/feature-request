import React, { Component } from "react";

class Likes extends Component {
  render() {
    return (
      <div className="likesDiv">
        <span className="timePosted" />
        <span>
          {this.props.likes.value} {handleHeart(this.props.likes.clicked)}
        </span>
      </div>
    );
  }

  //   countLikes = () => {
  //     return this.state.value === 1 ? "like" : "likes";
  //   };

  handleHeart = clicked => {
    if (clicked) {
      return <i className="far fa-heart" />;
    } else {
      return <i className="fas fa-heart" />;
    }
  };

  //   handleHeartClicked = () => {
  //     const clicked = !clicked;
  //     this.setState(clicked);

  //     if (clicked) {
  //       const value = value - 1;
  //       this.setState(value);
  //     } else {
  //       const value = value + 1;
  //       this.setState(value);
  //     }
  //   };
}

export default Likes;
