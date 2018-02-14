import "./ui.scss";
import React from "react";
import ReactDOM from "react-dom";
import {newGame} from "./hangman";

class HangmanGame extends React.Component {
    render() {
        const {hits, tries, result, onGuess} = this.props;

        return (
            <div className="hangman">
                <div className="status">
                    Hits: {JSON.stringify(hits)}, Tries: {tries}, Result:
                    {result === 0
                        ? "You have lost!!!"
                        : result === 1 ? "You have won!!!" : "Try again..."}
                </div>

                <div className="letters">
                    {"abcdefghijklmnñopqrstuvwxyz"
                        .split("")
                        .map((letter, letterIndex) => (
                            <button key={letterIndex} className="letter" onClick={() => onGuess(letter)}>{letter}</button>
                        ))}
                </div>
            </div>
        );
    }
}

class HangmanGameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {game: props.game};
    }

    render() {
        const {game: {hits, tries, result}} = this.state;

        return <HangmanGame hits={hits} tries={tries} result={result} onGuess={letter => this.handleGuess(letter)}/>;
    }

    handleGuess(letter) {
        const {game} = this.state;

        try {
            game.guess(letter);
        } catch (exception) {
            alert(exception.message);
        }

        this.setState({game});
    }
}

const words = ["foo", "bar", "baz"];
const game = newGame(words);
const ui = document.getElementById("ui");
ReactDOM.render(<HangmanGameContainer game={game}/>, ui);
