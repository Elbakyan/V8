import React from 'react';
import {connect} from 'react-redux';
import  './ScoreList.scss'
import {formatMs} from "@material-ui/core";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";


class ScoreList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showForm:true
        }
    }
    ShowAddScoreForm = (e) => {
        if (this.state.showForm){
            this.setState({
                showForm:false
            })
        }else{
            this.setState({
                showForm:true
            })
        }
    }
    render() {
        return (
            <div className="ScoreList">
               <div className="score__list-links">
                   <ul>
                       <li onClick={this.ShowAddScoreForm}><div>+</div></li>
                       <li><div>elbakyan</div></li>
                       <li><div>elbakyan</div></li>
                       <li><div>elbakyan</div></li>

                   </ul>

               </div>
                <form className='add_score_list' style={this.state.showForm?{transform:'scaleX(1)'}:{transform:'scaleX(0)'}}>
                    <label>
                        <DefaultInput
                            type='text'
                            name='scor_name'
                            placeholder='Խանութի անունը․․․'
                        />
                        <DefaultInput
                            type='text'
                            name='adress'
                            placeholder='Խանութի Հասցեն․․․'
                        />
                        <DefaultInput
                            type='number'
                            name='phone'
                            placeholder='Խանութի անունը․․․'
                        />
                    </label>

                    <label >
                        <DefaultInput
                            type='url'
                            name='url'
                            placeholder='https:/v8.am'
                        />
                        <DefaultInput
                            type='url'
                            name='f_url'
                            placeholder='https://facebook.com'
                        />
                        <DefaultInput
                            type='url'
                            name='i_url'
                            placeholder='https://instagrem.com'
                        />
                    </label>
                    <label>
                        <DefaultBtn
                            type='submit'
                            name='add'
                            background='#07E3E3'

                        />
                    </label>
                </form>
            </div>

        );
    }
}

const MapStateToProps = state => state;
const MainScoreList = connect(MapStateToProps)(ScoreList);
export default MainScoreList;
