import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";


class UserCars extends Component {
    constructor(props) {
        super(props);
        this.state ={
            img: []
        }
    }
    componentDidMount() {
        this.props.dispatch(GetModel())
    }

    AddAuto(e) {
        e.preventDefault();
        let data = new FormData(e.target)

        this.state.img.map(file => {
            data.append('image[]', file[0])
        })
        POST(Url.registration,data).then(res => {
            console.log(res)
        })
    }

    render() {
        const {user,location,auto,dispatch} = this.props;
        return (
            <div className="Profile__cars">
                <div className="">
                    <h1>Մուտքագրեք ձեր մեքենայի տվյալները</h1>
                        <form encType='multipart/form-data' onSubmit={this.AddAuto}>
                            <DefaultSelect
                                onChange={(e)=>{
                                    dispatch(GetModel(e))
                                }}
                                data={auto.mark}
                                width= '20%'
                            />
                            <DefaultSelect
                                data={auto.model}
                                width= '20%'
                            />
                            <select
                                name="year"
                                // onChange={this.props.onChange}
                                style={{
                                    backgroundColor: this.props.background,
                                    width:"12%"
                                }}
                            >
                                {
                                    auto.year.map((res, i) => {
                                        return <option key={i} value={res}>{res}</option>
                                    })
                                }
                            </select>

                            <DefaultSelect
                                data={auto.color}
                                width= '25%'
                            />

                            <select
                                name="engine"
                                // onChange={this.props.onChange}
                                style={{
                                    backgroundColor: this.props.background,
                                    width:"12%"
                                }}
                            >
                                {
                                    auto.engine.map((res, i) => {
                                        return <option key={i} value={res}>{res}</option>
                                    })
                                }
                            </select>
                        </form>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainUserCars = connect(MapStateToProps)(UserCars)
export  default MainUserCars;
// <div className="img__name">
//     {this.state.img.map(file => {
//         return <span style={{margin:'0px 5px'}}>
//                                     {file[0].name}
//                                     </span>
//     })}
//
// </div>