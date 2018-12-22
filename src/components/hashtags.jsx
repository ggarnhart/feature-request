import React, { Component } from "react";

class Hashtags extends Component {
  render() {
    return (
      <div className="hashtags-div">
        {this.props.hashtags.map(hashtag => (
          <span className="font-weight-bold" key={hashtag}>
            #{hashtag}{" "}
          </span>
        ))}
      </div>
    );
  }
}

export default Hashtags;
