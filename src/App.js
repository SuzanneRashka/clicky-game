import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav/Nav";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0,
    message: "",
    clicked: []
  };
  // handleClick(id) {
  //   id.preventDefault();
  //   console.log("This is not working")
  // }

  // handle clicks on image
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      // id.preventDefault;
      this.handleIncrement();
      // console.log("Clicked");
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
      console.log(this.state.clicked);
    } else {
      this.handleReset();
    }
  };

  // update the score
  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      message: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
      console.log("New Score " + newScore)
    }
    else if (this.state.score === 12) {
      this.setState({ message: "You Won!!" });

    }
    //should shuffle

    this.handleShuffle();
  };

  // reset score, topScore and clicked array
  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      message: "EWWW! So Close",
      clicked: []
    })
    // should shuffle
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title></Title>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        ></Nav>
        {this.state.friends.map(friend => (
          <FriendCard
            key={friend.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={friend.id}
            image={friend.image}
          // onClick={this.handleIncrement}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
