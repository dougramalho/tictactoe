import React from "react";
import Cell from "../containers/CellTic.js";

export default class Line extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<tr className="line">
            <Cell map={[this.props.line, 0]}/>
            <Cell map={[this.props.line, 1]}/>
            <Cell map={[this.props.line, 2]}/>
        </tr>);
    }
}

