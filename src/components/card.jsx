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
      id: 1,
      value: 1000,
      clicked: true
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3 card-div no-padding">
            <Hashtags hashtags={this.state.hashtags} />
            <FeatureInfo
              title={this.state.featureRequests.title}
              subtitle={this.state.featureRequests.subtitle}
              imgSource={this.state.featureRequests.imgSource}
            />
            <Likes
              value={this.state.likes.value}
              clicked={this.state.likes.clicked}
              onLikeToggle={this.handleLikeToggled}
            />
          </div>
        </div>
      </div>
    );
  }

  handleLikeToggled = () => {
    const likes = this.state.likes;

    if (!likes.clicked) {
      likes.value = likes.value + 1;
    } else {
      likes.value = likes.value - 1;
    }

    likes.clicked = !likes.clicked;
    this.setState({ likes });
  };
}

export default Cards;
