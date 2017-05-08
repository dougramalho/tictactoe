import React from "react";
import TableTic from "../components/TableTic.js";
import Player from "../containers/Player.js";
import ResumeGame from "../containers/ResumeGame.js";
import {Grid, Row, Col} from "react-bootstrap";

export default class Main extends React.Component {
    constructor(props){
        super(props);

        this.renderWinner = this.renderWinner.bind(this);
    }

    renderWinner(){
        let player = this.props.endGame.Player;
        console.log(player);
        let result = player.Name != undefined ? `Winner: ${player.Name}` : "No winner"
        
        return (
            <div>
                {result}
            </div>
        );
    }

    render() {
        return(
            <div>
                
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <h1>A Tic Tac Toe game!</h1>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={12} >
                            <Player />
                            {this.props.endGame.Finish ? this.renderWinner() : ""}
                        </Col>
                    </Row>
                    
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <TableTic />
                        </Col>
                        <Col xs={6} md={4}>
                            <ResumeGame />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}