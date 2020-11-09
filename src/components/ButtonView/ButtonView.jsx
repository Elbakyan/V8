import React, {Component, Fragment} from "react";
import './ButtonView.scss'

class ButtonView extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            view:false
        }
    }

    componentDidMount() {
        // let x = this.props.click()
        // x()
    }

    click= ()=>{
        this.setState({
            view:!this.state.view
        })
    }

    render() {

        return (
            <Fragment>
                {
                    this.state.view?
                        <span className='Button_view' onClick={this.click}>{this.props.button2}</span>
                        :
                        <span className='Button_view' onClick={this.click}>{this.props.button1}</span>
                }
            </Fragment>
        )
    }
}

export default ButtonView;