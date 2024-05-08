import json from "./parser";
import read from "./reader";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
  static load(){
    read()
      .then(value => {
        return json(value);
      })
      .then(gamesaving => {
        return new GameSaving(gamesaving);
      })
  }
}