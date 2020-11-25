import React from 'react';
import './modal.scss'

 class DefaultModal extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            hidde: false
        }
        this.hidde();
    }
    hidde = () => {
        setTimeout(() => {
            this.setState({
                hidde: true
            })
        },3000)
    }
    componentDidMount() {
        let modal = document.querySelector('.Modal')
        setTimeout(() => {
            modal.remove();
        },3000)
    }

     render() {
        return (
            <div className='Modal'ref='modal'
                 style={
                    this.state.hidde?{transform: 'translateY(-100%)'}: {transform: 'translateY(0%)'}}
            >
                <div>
                    <span>{this.props.content}</span>
                </div>
            </div>
        )
    }
}

export default DefaultModal;