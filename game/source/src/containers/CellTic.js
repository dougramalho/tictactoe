import {connect} from "react-redux";
import CellTic from "../components/CellTic.js"
import { withRouter } from 'react-router';
import {SetCurrentPlayer, GetAllPlayers, GetTotalMovements, IncreaseMovements, SavePlayerMovement} from "../actions.js";


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
        changeCurrentPlayer(player){
            
			dispatch(SetCurrentPlayer(player));
			dispatch(IncreaseMovements());
        },
		savePlayerMovement(player, movement){
			dispatch(SavePlayerMovement(player, movement));
		}
	}
}

const Container = connect(
	(state, props) => ({
		currentPlayer : state.CurrentPlayer,
        allPlayers: state.Players,
		endGame: state.EndGame
	}),
	mapDispatchToProps
)(CellTic);

export default withRouter(Container);
