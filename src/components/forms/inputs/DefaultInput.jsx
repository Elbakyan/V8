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
                name={this.props.name}
                defaultValue={this.props.defaultValue}
                value={this.props.value}
                type={this.props.type}
                key={this.props.key}
                required={this.props.required}
                defaultChecked={this.props.checked}
                style={{
                    transition: '.3s',
                    width:this.props.width,
                    height:this.props.height,
                    backgroundColor: this.props.background,
                    padding: this.props.padding,
                    margin: this.props.margin,
                    borderRadius: this.props.borderRadius,
                    border:  this.props.border
                }}

            />
        )
    }
}

export default DefaultInput;