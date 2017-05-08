import CONSTANTS from "../constants";
import {combineReducers} from "redux";


export const Players = (state=[], action) => {

    let newPlayers = [];
    switch(action.type){
        case CONSTANTS.SET_PLAYER :

             newPlayers = Object.assign([], state, 
                state.map((player, i) => i === action.payload.position ? action.payload.player
                                   : player)
            );
            console.log(newPlayers);
            return newPlayers;

        case CONSTANTS.GET_ALL_PLAYERS :
            
            return state;
        
        case CONSTANTS.SAVE_MOVEMENT :

            let players = Object.assign([], state);
            state = players.map((player, i) => player.Id === action.payload.Id ? action.payload : player)

            return state;

         case CONSTANTS.CHANGE_PLAYER_NAME :

            debugger;
             newPlayers = Object.assign([], state, 
                state.map((player, i) => player.Id === action.payload.Id ? action.payload
                                   : player)
            );

            return newPlayers;

        default :
            return state;
    }
}

export const Movements= (state=0, action) =>
    (action.type === CONSTANTS.GET_MOVEMENTS) ?
        action.payload :
		state
    
        
export const CurrentPlayer = (state={}, action) => {
    switch(action.type){
        case CONSTANTS.SET_CURRENT_PLAYER :
            return action.payload;

        case CONSTANTS.GET_ALL_PLAYERS :
            
            return state;
        default :
            return state;
    }
}

export const TotalMovements = (state=0, action)=> {
    switch(action.type){
        case CONSTANTS.GET_MOVEMENTS :
            return parseInt(state);

        case CONSTANTS.INCREASE_MOVEMENT :
            
            return parseInt(state) +1;
        default :
            return parseInt(state);
    }
}

export const EndGame = (state={}, action) => {
    switch(action.type){
        case CONSTANTS.END_GAME :
            return action.payload;
        default :
            return state;
    }
}


export default combineReducers({
    Players,
    CurrentPlayer,
    Movements,
    TotalMovements,
    EndGame
})



