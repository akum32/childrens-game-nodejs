### Childrens Game (nodejs) [![Build Status](https://travis-ci.org/akum32/childrens-game-nodejs.svg?branch=master)](https://travis-ci.org/akum32/childrens-game-nodejs)

Pre-requisites: Nodejs v7.2.0  
Install dependencies: `npm install`  
Run game: `npm run game -- --noOfChildren 5 --hopCount 3`  
Run tests / coverage: `npm run cover`  

#### Out of scope
- Input validation

#### Assumptions
- Game always starts from the first child

#### Terminology
- `noOfChildren (n)`
- `hopCount (k)`

#### Design
- Focuses on simple, clean, testable code. 
- Core game logic in `/lib` (independent of execution context).
- Children are represented as items in an array. Elimination logic uses a simple modulo operation to circulate the array and eliminate each child after the given hop count. 
- Elimination logic isolated to separate class following SRP (could potentially evolve to strategy pattern if additional elimination techniques must be supported).
- All `/lib` classes define immutable methods so there are no side effects. 

#### Alternate design?
- Make `/lib/game.js` asynchronous to prevent blocking calls and potentially allow consumers to subscribe to specific events for more fined grained control. e.g. UI / Console could subscribe to an `eliminated` event and re-render itself as each child is eliminated rather than just once at the end.
 