import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";
import DefaultInput from "../../forms/inputs/DefaultInput";
import {Link} from "react-router-dom";


class CarsForm extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(GetModel())
    }


    render() {
        console.log(this.props)
        const {user,location,auto,dispatch} = this.props;
        console.log('user',user)
        console.log('location',location)
        console.log('auto',auto)
        return (

                <div className="cars_forma">
                    <Link to='/user/account/cars/'>
                        home
                    </Link>
                    <h1>Մուտքագրեք ձեր մեքենայի տվյալները</h1>
                    <form>
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
                        <label>
                            Turbo
                            <DefaultInput
                                type="checkbox"
                                placeholder='Անուն․․․'
                                name='name'
                                width='2%'

                            />
                        </label>


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

        )
    }
}

const MapStateToProps = state => state;
const MainCarsForm = connect(MapStateToProps)(CarsForm)
export  default MainCarsForm;