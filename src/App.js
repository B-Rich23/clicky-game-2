import React, { Component } from "react";
import MarvelCard from "./components/MarvelCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import marvel from "./marvel.json";
import "./App.css";

class App extends Component {
  // Setting this.state.marvel to the marvel json array
  state = {
    marvel,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.marvel.forEach(marvel => {
      marvel.count = 0;
    });
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.marvel.find((obj, i) => {
      
      if (obj.id === id) {
        if (marvel[i].count === 0) {
          marvel[i].count = marvel[i].count + 1;
          this.setState({ score: this.state.score + 1 });
          this.state.marvel.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.marvel and render a MarvelCard component for each marvel object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>MARVEL CLICKY
        </Header>
        {this.state.marvel.map(marvel => (
          <MarvelCard
            id={marvel.id}
            key={marvel.id}
            name={marvel.name}
            image={marvel.image}
            clickCount={this.clickCount}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
