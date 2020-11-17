import React, {Component, Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faFolderOpen, faPen} from "@fortawesome/free-solid-svg-icons";
import {faFolder, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {connect} from "react-redux";
import ButtonView from "../../ButtonView/ButtonView";



class ListGlobalAutoParts extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            store: ''
        }
    }
    componentDidMount() {
        let st;
        this.props.score.scoreList.map((el,i)=>{
            if(i===0){
                st = el.id
            }
        })
        this.setState({
            store:st
        })
    }

    getStore = e =>{
        this.setState({
            store:e.target.value
        })
    }

    openModel = e =>{
        if(e.target.dataset.title == 1){
            console.log(e.target.className.split(' ')[1].toString())
            let block = document.querySelectorAll('.'+e.target.className.split(' ')[1].toString())
            console.log(block)
            block.forEach(el=>{
                // console.log(el)
                if(el.tagName != "LI"){
                    console.log(el.style.display)
                    if(el.style.display == 'none'){
                        el.style.display = 'flex'
                    }else{
                        el.style.display = 'none'
                    }
                }
            })
            e.target.childNodes[0].click()
        }
    }
    render() {
        let {carMark,carModel} = this.props.score.MarkModelParts
        // console.log(mark,model)
        console.log(this.props.score)
        return(
                <div className="get_list_auto_parts">

                    <div>
                        <select onChange={this.getStore}>
                            {
                                this.props.score.scoreList.map((el,i)=>{
                                    return(
                                        <option key={i} value={el.id}>
                                            {el.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='list_header'>
                        <ul>
                            <li>Ապրանքանիշը</li>
                            <li>Նոր</li>
                            <li>Օգտագործ.</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="list_body">
                        {
                            carMark?carMark.map((mark,i) => {
                               if(this.state.store == mark.score_id){
                                   return(
                                       // <div className="list_body">
                                       <Fragment key={i}>
                                           <ul >
                                               <li>{mark.mark}</li>
                                               {
                                                   mark.new?<li>նոր</li>:''
                                               }
                                               {
                                                   mark.old?<li>օգտ</li>:''
                                               }
                                               <li data-bul={false} onClick={this.openModel} className={"open_list open_list"+mark.id} data-title={1}>
                                                   <ButtonView
                                                       button1={<FontAwesomeIcon  icon={faFolder}/>}
                                                       button2={<FontAwesomeIcon  icon={faFolderOpen}/>}
                                                   />
                                               </li>
                                           </ul>
                                           {
                                               carModel.map((model,i)=>{

                                                   if(mark.mark_id === model.mark_id && this.state.store == model.score_id){
                                                       return (
                                                           <ul
                                                               key={model.id}
                                                               className={"open_list"+mark.id}
                                                               style={
                                                                   {
                                                                       display:"none",
                                                                       background:'#282838',
                                                                       color:'#ffffff'
                                                                   }
                                                               }
                                                           >
                                                               <li>{model.model}</li>
                                                               {
                                                                   model.new?<li>նոր</li>:''
                                                               }
                                                               {
                                                                   model.old?<li>օգտ</li>:''
                                                               }
                                                               <li></li>
                                                           </ul>
                                                       )
                                                   }
                                               })
                                           }
                                       </Fragment>

                                   )
                               }


                            }):''
                        }
                    </div>

                {/*</div>*/}
            </div>
        )
    }
}


const MapStateToProps = state => {
    return {
        score: state.score,
        location: state.location,
        auto: state.auto
    }
}

const MainListGlobalAutoParts = connect(MapStateToProps)(ListGlobalAutoParts);
export default MainListGlobalAutoParts;