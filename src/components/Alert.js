import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';
import './Alert.scss'

 class Art extends Component {
     constructor(props) {
         super(props);
     }


    static open = () => {
        let alert = document.querySelector('.alert');
            // alert.style.top = '50px'
            alert.style.display = 'block'
           setTimeout(() => {
               // alert.style.top = '-100px'
               setTimeout(() => {
                   alert.style.display = 'none'
               },1000)

           },2000)

    }

    render(){


        return (
            <div className='alert' style={{
                width: this.props.width +'%'
            }}
            >
                <Alert severity={this.props.type}>{this.props.content}</Alert>
                {/*<Alert severity="warning">This is a warning alert — check it out!</Alert>*/}
                {/*<Alert severity="info">This is an info alert — check it out!</Alert>*/}
                {/*<Alert severity="success">This is a success alert — check it out!</Alert>*/}
            </div>
        );
    }
}

export default Art;