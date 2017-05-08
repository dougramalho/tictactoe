import * as actions from "../actions.js";
import CONSTANTS from "../constants.js";

describe('actions', () => {
  it('should create an action to set a current player', () => {
    const player = {};
    
    const expectedAction = {
      type: CONSTANTS.SET_CURRENT_PLAYER,
      payload: player
    }
    
    expect(actions.SetCurrentPlayer(player)).toEqual(expectedAction)
  })
});

describe('actions', () => {
  it('should create total movements of the match', () => {
    const player = {};
    
    const expectedAction = {
      type: CONSTANTS.GET_TOTAL_MOVEMENTS
    }
    
    expect(actions.GetTotalMovements()).toEqual(expectedAction)
  })
});


describe('actions', () => {
  it('should change the player name', () => {
    const player = {
            "Id": "2",
            "Name": "Player 2",
            "Symbol": "fa fa-circle-o",
            "color": "#85144b",
            "Movements": []
    };
    
    const expectedAction = {
      type: CONSTANTS.CHANGE_PLAYER_NAME,
      payload: player
    }
    
    expect(actions.ChangePlayerName(player)).toEqual(expectedAction)
  })
});