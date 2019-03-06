import React, { Component } from "react";
import Card from "./components/Card";
// import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((cardToMatch, i) => {
      if (cardToMatch.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - .5 )
          return true;
        } else {
          this.gameOver();
        }
      } return null;
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        <div className="container">
          {this.state.cards.map(card => (
            <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;