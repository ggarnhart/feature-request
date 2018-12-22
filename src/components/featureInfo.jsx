import React, { Component } from "react";

class FeatureInfo extends Component {
  state = {
    title: "Spotify Groups",
    subtitle: "A group queing solution",
    imgSource:
      "https://cdn-images-1.medium.com/max/1200/1*-ez3ZpybzQIgxt2ltdH4YQ.png"
  };
  render() {
    return (
      <div className="featureInfoDiv">
        <div className="feature-text">
          <h1>{this.props.title}</h1>
          <h3>{this.props.subtitle}</h3>
        </div>
        <img src={this.props.imgSource} />
      </div>
    );
  }
}

export default FeatureInfo;
