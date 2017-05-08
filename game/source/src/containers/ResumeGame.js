import {connect} from "react-redux";
import ResumeGame from "../components/ResumeGame.js"
import { withRouter } from 'react-router';
import {ChangePlayerName } from "../actions.js";


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changePlayerName(player){
			dispatch(ChangePlayerName(player));
		}
	}
}

const Container = connect(
	(state, props) => ({
		players : state.Players
	}),
	mapDispatchToProps
)(ResumeGame);

export default withRouter(Container);
