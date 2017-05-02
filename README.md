# DeilouDungeon
Deilou Dungeon is a card-based roguelike that can be played with a standard deck of cards. Most of the mechanics are inspired by [Donsol](http://wiki.xxiivv.com/Donsol).

## Mechanics
Potions (Hearts) will heal you but you can't heal more than your max HP.
Shields (Diamonds) will equip a shield for face value, replacing any shield you currently have.
Monsters (Spades and Clubs) will damage you for face value.

All face cards are worth 10 and aces are worth 11.

## Traveling the Dungeon
At any time, you may go to the next floor. Any face down cards will be carried over to the next floor. Any face up monsters will go the next floor. Any face up potions or shields will be left behind. The carried over cards go to the top slot.

## Scoring
To score you have to block damage. 
Blocked damage but your shield breaks: 1 x blocked damage goes to score.
Blocked damage but your shield doesn't break: 2 x blocked damage goes to score.
Shield is equal to damage (perfect block): 3 x blocked damage, shield takes no damage.

(Not Implemented) If you complete all the cards on a floor you will get floor# * 10 points.

## Credits

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
