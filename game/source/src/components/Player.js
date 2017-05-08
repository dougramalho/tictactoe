import React from "react";

export default class Player extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div>
            <b>Playing:</b> {this.props.player.Name}
        </div>);
    }
}