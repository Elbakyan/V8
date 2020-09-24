import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";
<<<<<<< HEAD
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
=======
import DefaultInput from "../../forms/inputs/DefaultInput";
import CarsForm from "./CarsForm";
>>>>>>> 8918b1aae4f2abd4a2a95acab22145ff55167ea6

const  initialAuto = [
    {
        model:''
    }
]

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
<<<<<<< HEAD
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
=======
        console.log('user',user)
        console.log('location',location)
        console.log('auto',auto)

        return (
            <div className="Profile__cars">
                {initialAuto.length ? <CarsForm/> :''}
                {/*{initialAuto.map(()=>())}*/}
>>>>>>> 8918b1aae4f2abd4a2a95acab22145ff55167ea6

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