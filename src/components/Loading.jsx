import React from 'react';
import '../style/style.scss';
import ReactLoading from "react-loading";
import {HashLoader} from "react-spinners";

class Loading extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        if (this.props.type !== undefined){
            return (
                <div className="Loading">
                    <ReactLoading type={this.props.type} width={this.props.size} height={this.props.size} color={this.props.color}/>
                </div>
            );
        }else{
            return (
                <div className="Loading">
                    <HashLoader size={100} color={"#ffffff"} />
                </div>
            );
        }
    }
}

export default Loading;
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes