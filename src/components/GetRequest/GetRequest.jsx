import React, {Component, Fragment} from "react";
// import '../User/message/Message.scss';
import './GetRequest.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import DefaultBtn from "../forms/buttons/DefaultBtn";



class GetRequest extends Component{
    render() {
        console.log(this.props.request.request)
        return(
            <div className='message_users_component'>
                <div className="message_users">
                    <div className="respondent">
                        <ul className='users'>
                            {
                                this.props.request.request.map((el,i)=>{
                                    console.log(el)
                                    return(
                                        <Link key={i}
                                              to={this.props.score.score.status? '/score/account/request/'+el.message[0].dialog
                                                  :
                                                  'user/account/request/'+el.message.dialog
                                              }>
                                            <ul >
                                                <li>{el.user.name}{el.user.surname}</li>
                                                <li><img src={el.user.img} alt=""/></li>
                                            </ul>
                                        </Link>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div className="get_message">
                        {
                            this.props.request.request.map((el,i)=>{
                                return(
                                    <Route key={i} path={this.props.score.score.status? '/score/account/request/'+el.message[0].dialog
                                        :
                                        'user/account/request/'+el.message.dialog
                                    }>
                                        <div className="message">
                                            <ul>
                                                <li className='msStyle get'>
                                                    <ul className='message_request_style'>
                                                        <li>1111</li>
                                                    </ul>
                                                </li>
                                                {
                                                    el.message.map((mess,i)=>{
                                                        console.log(mess)
                                                        return(
                                                            <li className={this.props.score.score.id || this.props.user.id === mess.send?'msStyle send':'msStyle get'}>
                                                                <ul className='message_request_style'>
                                                                    {
                                                                        mess.img ||  mess.message.mark ||
                                                                        mess.message.model || mess.message.engine ||
                                                                        mess.message.year ||   mess.message.vin ||
                                                                        mess.message.new || mess.message.old || mess.message.sircle?
                                                                        <div className='message_info'>
                                                                            <div className='message_info__image'>
                                                                                {
                                                                                    mess.img? <li><img src={mess.img} alt={mess.img} /></li> :''
                                                                                }
                                                                            </div>

                                                                            <div className='message_info__description'>
                                                                                {
                                                                                    mess.message.mark? <li>Մակնիշ - {mess.message.mark}</li> :''
                                                                                }
                                                                                {
                                                                                    mess.message.model? <li>Մոդել - {mess.message.model}</li> :''
                                                                                }
                                                                                {
                                                                                    mess.message.engine? <li>Շարժիճի ծավալը ։{mess.message.engine}</li> :''
                                                                                }
                                                                                {
                                                                                    mess.message.year? <li>Տարեթիվ ։{mess.message.year}</li> :''
                                                                                }
                                                                                {
                                                                                    mess.message.vin? <li>VIN:({mess.message.vin})</li> :''
                                                                                }
                                                                                {
                                                                                    mess.message.new? <li>{'Նոր'}</li> :''
                                                                                }
                                                                                {
                                                                                    mess.message.old? <li>{'Օգտագործված'}</li> :''
                                                                                }
                                                                                {
                                                                                    mess.message.sircle? <li>Տարածաշրջան ։{ mess.message.sircle}</li> :''
                                                                                }
                                                                            </div>

                                                                        </div>:''
                                                                    }

                                                                    <div className='message_text'>
                                                                        {
                                                                            mess.message.message || mess.message.message!== ''? <li>{ mess.message.message}</li> :''
                                                                        }
                                                                    </div>

                                                                </ul>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className='send_message'>
                                                <form onSubmit={this.Message} ref={el => this.formRef = el}>
                                                    <textarea className="message_text" onKeyDown={this.onEnterPress} name="message" ref={el => this.textareaRef = el}></textarea>
                                                    <input type="hidden" name='get' value={this.props.user.id }/>
                                                    <input type="hidden" name='get_id' value={this.props.getId}/>
                                                    <div className="message_send_button">
                                                        <DefaultBtn
                                                            type='submit'
                                                            name='Ուղարկել'
                                                            background='#143645'
                                                            color='#ffffff'
                                                            light={30}
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>



                                    </Route>
                                )
                            })
                        }
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
