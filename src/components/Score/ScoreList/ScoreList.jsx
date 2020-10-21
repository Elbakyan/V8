import React from 'react';
import {connect} from 'react-redux';
import  './ScoreList.scss'
import {formatMs} from "@material-ui/core";
import DefaultInput from "../../forms/inputs/DefaultInput";


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
                    <DefaultInput
                        type='text'
                        name='scor_name'
                        placeholder='Խանութի անունը․․․'
                    />
                </form>
            </div>

        );
    }
}

const MapStateToProps = state => state;
const MainScoreList = connect(MapStateToProps)(ScoreList);
export default MainScoreList;
