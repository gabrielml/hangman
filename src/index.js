import {newGame} from './hangman';

const words = ['foo', 'bar', 'baz'];
const game = newGame(words);

console.log(game);