import {connect} from "react-redux";
import Player from "../components/Player.js"
import { withRouter } from 'react-router';


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
        
	}
}

const Container = connect(
	(state, props) => ({
		player : state.CurrentPlayer
	}),
	mapDispatchToProps
)(Player);

export default withRouter(Container);
