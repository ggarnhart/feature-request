import React, { Component } from "react";
import FeatureInfo from "./featureInfo";
import "./cards.css";
import Likes from "./likes";
import Hashtags from "./hashtags";

class Cards extends Component {
  state = {
    hashtags: ["spotify", "music"],
    featureRequests: {
      title: "Spotify Groups",
      subtitle: "A group queing solution",
      imgSource:
        "https://cdn-images-1.medium.com/max/1200/1*-ez3ZpybzQIgxt2ltdH4YQ.png"
    },
    likes: {
      value: 1000,
      clicked: true
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Hashtags hashtags={this.state.hashtags} />
            <FeatureInfo
              title={this.state.feature.title}
              subtitle={this.state.feature.subtitle}
              imgSource={this.state.feature.imgSource}
            />
            <Likes value={this.state.likes.value} clicked={likes.clicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
