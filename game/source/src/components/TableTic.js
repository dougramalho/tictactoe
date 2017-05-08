import React from "react";
import Line from "../components/LineTic.js";

export default class TableTic extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<table>
            <tbody className="boardGame">
                <Line line={0} />
                <Line line={1} />
                <Line line={2} />
            </tbody>
        </table>);
    }
}