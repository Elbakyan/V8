import React, {Component} from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";

class ProfilSetingsScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgName: ''
        }
        this.passwordRef = React.createRef();
        this.NewPasswordRef = React.createRef();
        this.NewPassword2Ref = React.createRef();
    }

    Setings = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)
        POST(Url.scoreSetingsUser,data).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className='score__setings'>
                <form onSubmit={this.Setings} encType='multipart/form-data'>
                    <label>
                        <input
                            type="text"
                            name='name'
                            placeholder='Անուն․․․'
                            defaultValue={this.props.name}
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name='surname'
                            placeholder='Ազգանուն․․․'
                            defaultValue={this.props.surname}
                        />
                    </label>
                    <label>
                        <input
                            type="number"
                            name='phone'
                            placeholder='Հեռախոսահամար․․․'
                            defaultValue={this.props.phone}
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            name='email'
                            placeholder='E-mail'
                            defaultValue={this.props.email}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Ձեր գաղտնաբառը․․․'
                            ref={this.passwordRef}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name='new_password'
                            placeholder='Նոր գաղտնաբառը․․․'
                            ref={this.NewPasswordRef}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            name='new_password2'
                            placeholder='Կրկնել նոր գաղտնաբառը․․․'
                            ref={this.NewPasswordRef}
                        />
                    </label>
                    <label className='file'>
                        <span>{this.state.imgName ? this.state.imgName.split('\\').pop() : 'Ներբեռնել լուսանկար'}</span>
                        <input
                            type="file"
                            name='img'
                            onChange={(e) => {
                                this.setState({
                                    imgName: e.target.value
                                })
                            }}
                        />
                    </label>
                    <label>
                        <button>Send</button>
                    </label>
                </form>
            </div>
        )
    }
}

const MapStateToProps = state => state.score.score.data;
const MainProfilSetingsScore = connect(MapStateToProps)(ProfilSetingsScore);
export default MainProfilSetingsScore;