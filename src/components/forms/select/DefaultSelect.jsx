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

                        if (res.name == this.props.selected)this.state.optId = res.id;
                        let selected = (res.name == this.props.selected)? ' selected' : '';

                        return <option  key={i} value={res.name} selected={selected}>{res.name}</option>
                    })
                }
            </select>
        )
    }
}

export default DefaultSelect;