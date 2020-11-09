import React, {Component, Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faFolderOpen, faPen} from "@fortawesome/free-solid-svg-icons";
import {faFolder, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {connect} from "react-redux";
import ButtonView from "../../ButtonView/ButtonView";



class ListGlobalAutoParts extends  Component{
    constructor(props) {
        super(props);

    }
    openModel = e =>{
       // e.target.innerHTML = <FontAwesomeIcon icon={faFolderOpen}/>
       //  console.log(this.ban,this.ban2)

    }
    render() {
        let {mark,model} = this.props.score.MarkModelParts
        // console.log(mark,model)
        console.log(this.props.score)
        return(
                <div className="get_list_auto_parts">
                    <div>
                        <section>

                        </section>
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
                            mark?mark.map((mark)=>{
                                // console.log(mark)
                                return(
                                    // <div className="list_body">
                                    <Fragment>
                                        <ul key={mark.id}>
                                            <li>{mark.mark}</li>
                                            {
                                                mark.new?<li>նոր</li>:''
                                            }
                                            {
                                                mark.old?<li>օգտ</li>:''
                                            }
                                            <li data-bul={false} onClick={this.openModel}>
                                                <ButtonView
                                                    button1={<FontAwesomeIcon  icon={faFolder}/>}
                                                    button2={<FontAwesomeIcon  icon={faFolderOpen}/>}
                                                />
                                            </li>
                                        </ul>
                                        {
                                            model.map(model=>{

                                                if(mark.mark_id === model.mark_id){
                                                    return (
                                                        <ul>
                                                            <li>{model.model}</li>
                                                            {
                                                                model.new?<li>նոր</li>:''
                                                            }
                                                            {
                                                                model.old?<li>օգտ</li>:''
                                                            }
                                                        </ul>
                                                    )
                                                }
                                            })
                                        }
                                    </Fragment>

                                )

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