import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';

 class Art extends Component {

    render(){
        return (
            <div className='alert' ref={this.alertRef} style={{
                width: 100 +'%',

            }}
            >
                <Alert severity={this.props.type}>{this.props.content}</Alert>
                {/*<Alert severity="error">This is a warning alert — check it out!</Alert>*/}
                {/*<Alert severity="warning">This is a warning alert — check it out!</Alert>*/}
                {/*<Alert severity="info">This is an info alert — check it out!</Alert>*/}
                {/*<Alert severity="success">This is a success alert — check it out!</Alert>*/}
            </div>
        );
    }
}

export default Art;