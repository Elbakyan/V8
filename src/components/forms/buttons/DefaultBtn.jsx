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
                    if (this.props.background != undefined){
                        e.target.style.backgroundColor = `${LightenDarkenColor(this.props.background, -this.props.dark || this.props.light ||  -30)}`
                    }

                }}
                onMouseLeave={(e) => {
                    if (this.props.background != undefined){
                        e.target.style.backgroundColor = `${this.props.background}`
                    }

                }}
                onClick={this.props.onClick}
                id={this.props.id}
                data-id={this.props.dataId}
                className={this.props.className}
                type={this.props.type}
                disabled={this.props.disabled}
                style={{
                    backgroundColor: this.props.background,
                    color:'' || this.props.color,
                    padding: this.props.padding,
                    borderRadius: this.props.borderRadius,
                    fontSize: this.props.fontSize,
                    fontFamily: this.props.fontFamily,
                    width: this.props.width
                }}

            >{this.props.name}</button>
        )
    }
}

export default DefaultBtn;