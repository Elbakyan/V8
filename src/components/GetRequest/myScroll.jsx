import React, {Component,Fragment} from "react";
import './GetRequest.scss'
class myScroll extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.refScroll.scrollTop = this.refScroll.scrollHeight
    }

    render() {
        if(this.props.res)
        return (
            <Fragment>
                <ul ref={el=>this.refScroll=el}>

                </ul>
            </Fragment>
        )
    }
}

export default myScroll;