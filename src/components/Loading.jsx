import React from 'react';
import '../style/style.scss';
import ReactLoading from "react-loading";
import {HashLoader} from "react-spinners";

class Loading extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        switch (this.props.type){
            case this.props.type != undefined:
                return (
                    <div className="Loading">
                        <ReactLoading type={this.props.type} size={100} color={this.props.color}/>
                    </div>
                );
                break
            default:
                return (
                    <div className="Loading">
                        <HashLoader size={100} color={"#c5c5c5"} />
                    </div>
                );
                break


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