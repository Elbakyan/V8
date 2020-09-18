import React, {Component} from 'react';
import '../../../style/_All.scss'
class DefaultInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input
                onChange={this.props.onChange}
                onInput={this.props.onInput}
                placeholder={this.props.placeholder}
                className={this.props.className}
                style={{
                    transition: '.3s',
                    width:this.props.width,
                    height:this.props.height,
                    backgroundColor: this.props.background,
                    padding: this.props.paddingY + ' ' + this.props.paddingX,
                    borderRadius: this.props.borderRadius,
                    border:  this.props.border
                }}
                type={this.props.types}
            />
        )
    }
}

export default DefaultInput;