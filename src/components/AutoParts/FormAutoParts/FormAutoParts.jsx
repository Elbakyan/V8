import React, {Component, Fragment} from "react";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPen} from "@fortawesome/free-solid-svg-icons";
import {faTimesCircle, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {POST, TEST_POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import Api from "../../config/Api";
import {GetProduct} from "../../../redux/score/action";
import Loading from "../../Loading";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {maser} from "../../Menu/autoObj";
import FormGlobalAutoParts from "./FormGlobalAutoParts";
import TypeCars from "../TypeCars";
import {Redirect, Route} from "react-router";
import Art from "../../Alert";


class FormAutoParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreId: 0,
            search: '',
            loading: false,
            message: "",
            edit: false,
            id: '',
            price: '',
            count: '',
            top: 0,
            zoomImg: '',
            SelectStore: '',
            allParts: true,
            redirect:true
        }
    }

    componentDidMount() {
        this.props.dispatch(GetProduct())
        setTimeout(() => {
            this.props.score.scoreList.map((el, i) => {
                if (i === 0) {
                    this.setState({
                        SelectStore: el.name
                    })
                }
            })
        }, 500)
        if(window.location.pathname == '/score/account/cars/spare_parts/with_code'){
            this.setState({
                allParts:true,
                redirect:false
            })
            this.checked.checked = true
            this.categoryParts.innerText = 'Ըստ դետալի կոդի'

        }else{
            this.setState({
                allParts:false,
                redirect:false
            })
            this.checked.checked = false
            this.categoryParts.innerText = 'Ըստ մեքենայի ապրանքանիշի'
        }

    }

    closeImage = e => {
        let img = document.querySelector('.pars_image_open')
        img.style.display = 'none'
    }

    openImage = e => {
        if (e.target.dataset.img) {
            this.setState({
                zoomImg: e.target.dataset.img
            })
            let img = document.querySelector('.pars_image_open')
            img.style.display = 'block'
        }
    }

    search = e => {
        let el = document.getElementById(e.target.value);
        if (el) {
            el.scrollIntoView();
        }

        this.setState({
            search: e.target.value
        })
    }

    AddProduct = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let code = '';

        Array.from(data).forEach(res => {
            if (res[0] === 'code') {
                code = res[1]
            }
        })
        Api.get("num", {searchNumber: code}).then(res => {
            this.setState({
                loading: true
            })
            let name = '';

            if (res.data) {
                res.data.forEach(res => {
                    name = res.ProductDescription;
                })
            }
            if (res.result) {
                data.append('name', name)
                POST(Url.addproduct, data).then(res => {
                    console.log(res)
                    if (res) {
                        this.setState({
                            loading: false
                        })
                        if (res.status) {
                            this.setState({
                                message: ""
                            })
                            this.props.dispatch(GetProduct())
                        } else {
                            this.setState({
                                message: res.message
                            })
                            setTimeout(() => {
                                this.setState({
                                    message: ''
                                })
                            },5000)
                        }
                    }
                })
            }
        })

    }
    UpdateProductData = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)
        POST(Url.setingsproduct, data).then(res => {
            if (res.status) {
                this.setState({
                    edit: false,
                })
                this.props.dispatch(GetProduct())
            }
        })
    }
    DeliteProduct = (e) => {
        e.preventDefault();
        let data = new FormData()
        data.append('id', e.target.dataset.id);
        data.append('delite', true);
        POST(Url.setingsproduct, data).then(res => {
            if (res.status) {
                this.props.dispatch(GetProduct())
            }
        })
    }
    getSelectStore = (e) => {
        e.target.selected = true
        this.setState({
            SelectStore: e.target.value
        })
    }

    checkParts = (e) => {
        this.setState({
            allParts: e.target.checked
        })
        if (this.state.allParts) {
            this.categoryParts.innerText = 'Ըստ մեքենայի ապրանքանիշի'
        } else {
            this.categoryParts.innerText = 'Ըստ դետալի կոդի'
        }
    }

    render() {
        return (
            <Fragment>
                <div className='category-parts'>
                    <label className="switch">
                        <input ref={el => this.checked = el} defaultChecked type="checkbox" onChange={this.checkParts}/>
                        <span className="slider round"></span>
                    </label>
                    <span ref={el => this.categoryParts = el}>Ըստ դետալի համարի</span>
                </div>
                {
                    this.state.redirect?<Redirect to={window.location.pathname}/>:''
                }
                {
                    !this.state.redirect?
                    this.state.allParts ? <Redirect to='/score/account/cars/spare_parts/with_code'/>
                                            :
                                            <Redirect to='/score/account/cars/spare_parts/with_mark'/>:''
                }


                        <Route path='/score/account/cars/spare_parts/with_code'>
                            <div className="---">
                                <div className="add_auto_parts">
                                    {
                                        this.state.message?
                                            <Art type='warning' content={this.state.message}/>:''
                                    }
                                    <form encType='multipart/form-data' onSubmit={this.AddProduct}>
                                        <div className="score_list">
                                            {
                                                this.props.score.scoreList.map((el, i) => (
                                                    <label key={i}>
                                                        {el.name}
                                                        <DefaultInput
                                                            type='checkbox'
                                                            value={el.name + '/' + el.id}
                                                            name='score[]'
                                                            // width="5%"
                                                            checked
                                                        />
                                                    </label>
                                                ))
                                            }
                                        </div>

                                        <div className="score_parts_form">
                                            <DefaultInput
                                                name='code'
                                                placeholder="Պահեստամասի համարը / CODE"
                                                width="25%"
                                            />
                                            <DefaultInput
                                                type='number'
                                                name='price'
                                                placeholder="Արժեքը(Դրամ)"
                                                width="15%"
                                            />
                                            <DefaultInput
                                                type='number'
                                                name='count'
                                                placeholder="Առկա քանակը"
                                                width="15%"
                                            />
                                            <DefaultInput
                                                name='comments'
                                                placeholder="Լրացուցիչ ինֆորմացիյա"
                                                width="30%"
                                            />

                                        </div>

                                        <div className='score_parts_view'>
                                            <label>
                                                Նոր
                                                <DefaultInput
                                                    type='radio'
                                                    value="new"
                                                    name="state"
                                                    width="5%"
                                                    checked
                                                />
                                            </label>

                                            <label>
                                                Օգտագործված
                                                <DefaultInput
                                                    type='radio'
                                                    value="old"
                                                    name='state'
                                                    width="5%"
                                                />
                                            </label>
                                            <div className='parts_image'>
                                                <label className='file row align-center' style={{width: '106%'}}>
                                                    <span className='file__name'>Ներբեռնել լուսանկար․․․</span>
                                                    <DefaultInput
                                                        className="file_input"
                                                        type="file"
                                                        placeholder='Լուսանկար․․․'
                                                        name='img'
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="add__product-btn">
                                            {
                                                this.state.loading ?
                                                    <div className="loading_btn"><Loading type='spin' color='#ff0000'
                                                                                          size={30}/></div> : ''
                                            }
                                            <DefaultBtn
                                                type="submit"
                                                name='Առաջ'
                                                color="#fff"
                                                width='15%'
                                                background="rgb(74 141 210)"
                                            />
                                        </div>
                                    </form>
                                </div>

                                <div className='pars_image_open'>
                                    <div>
                                        <span onClick={this.closeImage}><FontAwesomeIcon icon={faTimesCircle}/></span>
                                        <img
                                            alt=""
                                            src={this.state.zoomImg}
                                        />
                                    </div>
                                </div>
                                {/*<DefaultSelect*/}
                                {/*    // onChange={this.getCategory}*/}
                                {/*    data={maser}*/}
                                {/*    width= '20%'*/}
                                {/*    name='stores'*/}
                                {/*/>*/}
                                <div className="select_store">
                                    <div>
                                        <p>Ընտրել խանութը</p>
                                        <select
                                            ref={el => this.getStore = el}
                                            onChange={this.getSelectStore}
                                        >
                                            {
                                                this.props.score.scoreList.map((el, i) => (
                                                    <option key={i} value={el.name}>
                                                        {el.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className='search'>
                                        <p>Գտնել դետալը ըստ համարի</p>
                                        <input type="text" onChange={this.search} placeholder='Ոորոնում․․․'/>
                                    </div>
                                </div>

                                <div className="get_list_auto_parts">
                                    <div className='list_header'>
                                        <ul>
                                            <li style={{width: '15%'}}>Սրահը</li>
                                            <li style={{width: '15%'}}>Համարը/CODE</li>
                                            <li style={{width: '15%'}}>Անվանումը</li>
                                            <li style={{width: '12%'}}>Արժեքը(Դ․)</li>
                                            <li style={{width: '12%'}}>Քանակը</li>
                                            <li style={{width: '12%'}}>Մուտքը</li>
                                            <li style={{width: '12%'}}>Լուսանկարը</li>
                                            <li style={{width: '10%'}}>Նոր կամ Օգտագործ</li>
                                            <li style={{width: '10%'}}>Կարգավորում</li>
                                        </ul>
                                    </div>

                                    <div className="list_body">
                                        {
                                            this.state.edit ?
                                                <form className="edit" style={{top: this.state.top + 'px'}}
                                                      onSubmit={this.UpdateProductData}>
                                                    <input type="number" name='price' defaultValue={this.state.price}/>
                                                    <input type="number" name='count' defaultValue={this.state.count}/>
                                                    <input type="hidden" value={this.state.id} name='id'/>
                                                    <button type='submit'>Հաստատել․</button>
                                                </form> : ''
                                        }


                                        {
                                            this.props.score.product.data ? this.props.score.product.data.map((el, i) => {

                                                if (el.store_name === this.state.SelectStore) {
                                                    return (
                                                        <ul
                                                            key={i}
                                                            id={el.code}
                                                            data-code={el}
                                                            style={{
                                                                background: el.code.replace(/\s/g, '').toUpperCase() == this.state.search.replace(/\s/g, '').toUpperCase() ?
                                                                    'rgba(0,128,0,0.39)' : ''
                                                            }}
                                                        >
                                                            <li style={{width: '15%'}} className='store_name'>
                                                                {el.store_name}
                                                            </li>
                                                            <li style={{width: '15%'}}>{el.code}</li>
                                                            <li style={{width: '15%'}}>{el.name}</li>
                                                            <li style={{width: '12%'}}>{el.price + ' Դր․'}</li>
                                                            <li style={{width: '12%'}}>{el.count + ' հ.'}</li>
                                                            <li style={{width: '12%'}}>{el.data.split(' ')[0]}</li>
                                                            <li style={{width: '12%'}}
                                                                onClick={this.openImage}
                                                                data-img={el.img ? el.img : ''}
                                                            >
                                                                {el.img ? <img data-img={el.img ? el.img : ''} src={el.img}
                                                                               alt=""/> : ''}
                                                            </li>
                                                            <li style={{width: '10%'}}>{el.new == 1 ? 'Նոր' : 'Օգտ.'}</li>
                                                            <li className='buttons' style={{width: '10%'}}>
                                                            <span data-id={el.id} data-price={el.price} data-count={el.count}
                                                                  onClick={(e) => {
                                                                      this.setState({
                                                                          edit: true,
                                                                          id: e.target.dataset.id,
                                                                          price: e.target.dataset.price,
                                                                          count: e.target.dataset.count,
                                                                          top: e.pageY - (window.scrollY + 25)
                                                                      })
                                                                  }}>
                                                                <FontAwesomeIcon icon={faPen}/>
                                                            </span>
                                                                <span onClick={this.DeliteProduct} data-id={el.id}>
                                                                <FontAwesomeIcon icon={faTrashAlt}/>
                                                            </span>
                                                            </li>
                                                        </ul>

                                                    )
                                                }

                                            }) : ''


                                        }
                                    </div>
                                </div>
                            </div>
                        </Route>
                        <Route path='/score/account/cars/spare_parts/with_mark'>
                            <TypeCars />
                        </Route>




            </Fragment>
        )
    }
}

const MapStateToProps = state => {
    return {
        score: state.score,
        location: state.location
    }
}

const MainFormAutoParts = connect(MapStateToProps)(FormAutoParts);
export default MainFormAutoParts;