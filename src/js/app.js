// TODO: write your code here
import sum from './basic';
import GameSavingLoader from './class/GameSavingLoader';

console.log('worked');

console.log(sum([1, 2]));

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  console.log(saving);
}, (error) => {
  console.log(error);
});

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  }
  catch(error) {
    console.log(error);
  }
})();