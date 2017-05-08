import {connect} from "react-redux";
import Main from "../components/Main.js"
import { withRouter } from 'react-router';
import {SetCurrentPlayer, GetAllPlayers} from "../actions.js";


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
        
	}
}

const Container = connect(
	(state, props) => ({
		currentPlayer : state.CurrentPlayer,
		endGame: state.EndGame
	}),
	mapDispatchToProps
)(Main);

export default withRouter(Container);
