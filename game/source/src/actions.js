import CONSTANTS from "./constants";


export const GetPlayer = (position) => {
    return {
        type: CONSTANTS.GET_PLAYER,
        payload: position
    }
}

export const SetPlayer = (player, position) => {
    let payload = {
        position: position,
        player: player
    }

    return {
        type: CONSTANTS.SET_PLAYER,
        payload: payload
    }
}

export const GetAllPlayers = () => {
    return {
        type: CONSTANTS.GET_ALL_PLAYERS
    }
}

export const GetCurrentPlayer = () => {
    return {
        type: CONSTANTS.GET_CURRENT_PLAYER
    }
}    

export const SetCurrentPlayer = (currentPlayer) => {
    return {
        type: CONSTANTS.SET_CURRENT_PLAYER,
        payload: currentPlayer
    }
}

export const GetTotalMovements = () => {
    return {
        type: CONSTANTS.GET_TOTAL_MOVEMENTS
    }
} 

export const IncreaseMovements = () => {
    return {
        type: CONSTANTS.INCREASE_MOVEMENT
    }
}

export const SavePlayerMovement = (player, movement) => {
    player.Movements = player.Movements == null ? [movement] : [...player.Movements, movement];
    
    return {
        type: CONSTANTS.SAVE_MOVEMENT,
        payload: player
    }
}

export const ChangePlayerName = (player) => {
    return {
        type: CONSTANTS.CHANGE_PLAYER_NAME,
        payload: player
    }
}