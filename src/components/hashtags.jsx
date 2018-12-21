import React, { Component } from "react";

class Hashtags extends Component {
  render() {
    return (
      <div>
        {this.props.hashtags.map(hashtag => (
          <span key={hashtag}>#{hashtag}</span>
        ))}
      </div>
    );
  }
}

export default Hashtags;
