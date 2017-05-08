import Main from "./containers/Main.js";
import { render } from "react-dom";
import React from "react";
import storeFactory from "./store";
import initialState from "./initialState";
import {SetCurrentPlayer, GetAllPlayers, GetCurrentPlayer} from "./actions.js";
import {Provider} from "react-redux";
import { BrowserRouter, HashRouter,  Switch,  Route,  Link} from 'react-router-dom';

let store = storeFactory(initialState);

window.store = store;

const routes = (
	<Provider store={store}>
	   <BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main} />
			</Switch>	
	   </BrowserRouter>
	</Provider> 
);

render(routes, document.getElementById('react-container'));