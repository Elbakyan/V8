import React, {Component} from 'react';

class DefaultSelect extends Component {
    constructor(props) {
        super(props);
        this.state ={
            optId: '',
            selectValue:''
        }
    }

    render() {
        return (
            <select
                name={this.props.name}
                onChange={this.props.onChange}
                style={{
                    backgroundColor: this.props.background,
                    width: this.props.width,
                    height:this.props.height
                }}
                required={this.props.required}
                defaultValue={this.props.defaultValue}
            >
                {
                    this.props.data.map((res, i) => {
                        return <option  key={i} data-count={i} value={res.name}>{res.name}</option>
                    })
                }
            </select>
        )
    }
}

export default DefaultSelect;