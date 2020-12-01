import React, {Component} from "react";
import '../User/message/Message.scss'
import {connect} from "react-redux";


class GetRequest extends Component{
    render() {
        console.log(this.props.request.request)
        return(
            <div className='message_users_component'>
                <div className="message_users">
                    <div className="respondent">
                        {
                            this.props.request.request.map((el)=>{
                                console.log(el)
                            })
                        }
                    </div>
                    <div className="message">

                    </div>
                </div>
            </div>
        )
    }
}

// export default GetRequest
const MapStateToProps = state => state;
const MainGetRequest = connect(MapStateToProps)(GetRequest);
export default MainGetRequest ;
