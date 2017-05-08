import React from "react";
import {Modal, Button, FormControl, Panel} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default class ResumeGame extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            edit: {},
            value: ""
        };

        this.close = this.close.bind(this);
        this.save = this.save.bind(this);
        this.open = this.open.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    close() {
        this.setState({ showModal: false, edit: {}, value:"" });
    }

    save(){
        let player = this.state.edit;
        player.Name = this.state.value;
        this.setState({ showModal: false, edit: {}, value:"" });

        this.props.changePlayerName(player);
    }

    open(player) {
        this.setState({ showModal: true, edit: player });
    }

    handleChange(value){
        this.setState({ showModal: true, edit: player });
    }


    render() {
        
        let players = this.props.players.map((player, i) => <li key={player.Id}>
					{player.Name} <Link to="#" onClick={() => this.open(player)} >change name</Link>
				</li>);
        
        return (<div>
            
            <Panel header="Players" bsStyle="info">
                <ul>
                    {players}
                </ul>
            </Panel>

            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Change the Player name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" value={this.state.value} placeholder="Enter name" onChange={(e) => this.setState({value: e.target.value})} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.save}>Save</Button>
                </Modal.Footer>
            </Modal>
            </div>);
    }
}