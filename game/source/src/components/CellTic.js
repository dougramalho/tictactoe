import React from "react";
import FontAwesome from 'react-fontawesome';

export default class Cell extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showSymbol: false,
            symbol: null,
            lock: false
        };
        this.setPlayerTic = this.setPlayerTic.bind(this);
    }

    setPlayerTic(){
        let currentPlayer = this.props.currentPlayer;

        if(!this.state.lock && !this.props.endGame.Finish){
            
            let players = Object.assign([], this.props.allPlayers);
            let nextplayer = players.filter(player => player.Id !== currentPlayer.Id)[0];
            
            console.log(nextplayer);

            this.setState({
                lock: true,
                showSymbol: true,
                symbol: <FontAwesome name="" style={{color: currentPlayer.color}} className={[currentPlayer.Symbol, "symbol"].join(' ')} />
            });

            this.props.savePlayerMovement(currentPlayer, this.props.map);
            this.props.changeCurrentPlayer(nextplayer);
            
        }
    }

    render() {
        return (<td onClick={this.setPlayerTic} className="colTic">
            
            {this.state.showSymbol ?
                this.state.symbol :
                ""
            }
            
        </td>);
    }
}

