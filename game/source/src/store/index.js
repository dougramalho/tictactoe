import CONSTANTS from "../constants";
import appReducer from  "./reducers";
import {createStore, applyMiddleware} from "redux";
import {ComputeVictory} from "../utils.js";


const consoleMessages = store => next => action => {
	
	let result;

	console.groupCollapsed(`dispatching action => ${action.type}`);
	
	result = next(action);

	let { Players, CurrentPlayer, Movements, TotalMovements } = store.getState();

	console.log(`

		Players: ${ JSON.stringify(Players) }
		Current Player: ${ JSON.stringify(CurrentPlayer) }
	`);

	console.groupEnd();

	return result;
}

const logger = store => next => action => {
  
  console.log('Dispatching', action);
  let result = next(action);
  console.log('Next state', store.getState());
  return result;
  
}

const computeVictory  = store => next => action => {

	let result;

	result = next(action);

	let { Players, CurrentPlayer, Movements, TotalMovements } = store.getState();
	
	if(action.type === CONSTANTS.INCREASE_MOVEMENT){
		
		if(TotalMovements >= 5) {
			
			let previusPlayer = Object.assign([], Players);
			previusPlayer = previusPlayer.filter((player) => player.Id !== CurrentPlayer.Id);
			
			debugger;

			let endGame = ComputeVictory(previusPlayer[0]);
			
			if(endGame){
				
				let payload = {
					Player: previusPlayer[0],
					Finish: endGame
				}
				let endGameAction = {
					type: CONSTANTS.END_GAME,
					payload: payload
				}
				next(endGameAction);
			}
		}
	}

	
}

const endGameNoVictory  = store => next => action => {

	let result;
	
	result = next(action);

	let { Players, CurrentPlayer, Movements, TotalMovements } = store.getState();

	if(action.type === CONSTANTS.INCREASE_MOVEMENT){
		if(TotalMovements == Movements){
			
			let payload = {
				Player: {},
				Finish: true
			}

			let endGameAction = {
				type: CONSTANTS.END_GAME,
				payload: payload
			}
			next(endGameAction);
		}
	}
}

const changePlayerNamePersister = store => next => action => {
	let result;
	
	result = next(action);

	let { Players, CurrentPlayer, Movements, TotalMovements } = store.getState();

	if(action.type === CONSTANTS.CHANGE_PLAYER_NAME){
		
		if(CurrentPlayer.Id === action.payload.Id){
			let payload = {
				type: CONSTANTS.SET_CURRENT_PLAYER,
				payload: action.payload
			}

			next(payload);
		}
		
		
	}
}

export default (initialState={}) => {
	return applyMiddleware(logger, consoleMessages, computeVictory, endGameNoVictory, changePlayerNamePersister)(createStore)(appReducer, initialState);
}