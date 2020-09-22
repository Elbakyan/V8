import React, {Component} from 'react';
class DefaultSelect extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <select
                name={this.props.name}
                onChange={this.props.onChange}
                style={{
                    backgroundColor: this.props.background ,
                    width:this.props.width
                }}
            >
                {
                    this.props.data.map((res,id )=> {

                        return <option kay={id + Math.random() * 1000} value={res.name}>{res.name}</option>
                    })
                }
            </select>
        )
    }
}

export default DefaultSelect;