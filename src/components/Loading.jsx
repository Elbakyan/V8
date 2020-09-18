import React from 'react';
import ReactLoading from "react-loading";
import '../style/style.scss';
import ClipLoader from "react-spinners/ClipLoader";
import {HashLoader} from "react-spinners";

class Loading extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    render() {
        return (
            <div className="Loading">
                {/*<ReactLoading type='blank'  color='#0e7996' height={50} width={50} />*/}
                {/*<ReactLoading type='balls'  color='#0e7996' height={50} width={50} />*/}
                {/*<ReactLoading type='bars'  color='#0e7996' height={50} width={50} />*/}
                {/*<ReactLoading type='bubbles'  color='#0e7996' height={50} width={50} />*/}
                {/*<ReactLoading type='cubes'  color='#0e7996' height={50} width={50} />*/}
                {/*<ReactLoading type='cylon'  color='#0e7996' height={50} width={50} />*/}
                {/*<ReactLoading type='spin'  color='#0e7996' height={50} width={50} />*/}
                {/*<ReactLoading type='spinningBubbles'  color='#0e7996' height={50} width={50} />*/}
                {/*<ReactLoading type='spokes'  color='#0e7996' height={50} width={50} />*/}
                    <HashLoader
                        size={100}
                        color={"#c5c5c5"}
                        loading={this.state.loading}
                    />

            </div>
        );
    }
}

export default Loading;
