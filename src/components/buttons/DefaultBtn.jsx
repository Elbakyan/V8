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
                   e.target.style.backgroundColor = `${LightenDarkenColor(this.props.color, this.props.DarkLight || -50)}`
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = `${this.props.color}`
                }}
                style={{

                    backgroundColor: this.props.color,
                    padding: this.props.paddingY + ' ' + this.props.paddingX,
                    borderRadius: this.props.borderRadius,
                    fontSize: this.props.fontSize,
                    fontFamily: this.props.fontFamily
                }}
            >DefaultBtn</button>
        )
    }
}

export default DefaultBtn;