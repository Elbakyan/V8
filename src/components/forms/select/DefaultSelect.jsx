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
<<<<<<< HEAD
                    this.props.data.map((res,id )=> {

                        return <option kay={id + Math.random() * 1000} value={res.name}>{res.name}</option>
=======
                    this.props.data.map((res,i )=> {
                        return <option key={res.id} value={res.name}>{res.name}</option>
>>>>>>> 295c55b19c6720f7388449fa9577929c91795203
                    })
                }
            </select>
        )
    }
}

export default DefaultSelect;