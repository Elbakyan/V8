import React, {Component} from 'react';
import './Button.scss';
import {LightenDarkenColor} from "lighten-darken-color";

class DefaultBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button
                onMouseEnter={(e) => {
                   e.target.style.backgroundColor = `${LightenDarkenColor(this.props.background, -this.props.dark || this.props.light ||  -30)}`
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = `${this.props.background}`
                }}
                className={this.props.className}
                type={this.props.types}
                style={{
                    backgroundColor: this.props.background,
                    color: this.props.color,
                    padding: this.props.paddingY + ' ' + this.props.paddingX,
                    borderRadius: this.props.borderRadius,
                    fontSize: this.props.fontSize,
                    fontFamily: this.props.fontFamily
                }}

            >{this.props.name}</button>
        )
    }
}

export default DefaultBtn;