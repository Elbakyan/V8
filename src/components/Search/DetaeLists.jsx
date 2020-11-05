import React, {Component} from "react";
import SliderAuto from "../SliderAuto/SliderAuto";
import {connect} from "react-redux";
import Api from "../config/Api";
import {
    SearchResultAnal,
    SearchResultAnalCount,
    SearchResultAuto, SearchResultImg,
    SearchResultProduct
} from "../../redux/search/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
let data = [
    'http://web.nirax.ru/cross/image/55/00215160503.jpg',
    'http://web.nirax.ru/cross/image/29/00215160603.jpg',
    'http://web.nirax.ru/cross/image/29/00215160703.jpg'
]
class DetaleLists extends Component{
    constructor(props) {
        super(props);
        this.state = {
            analCount: 0,
            anal: [],
            auto: [],
            product: '',
            img: [],
            fullImg: '',
            openFullImg: false
        }
    }

    componentDidMount() {
        let id = window.location.pathname.split('/')[window.location.pathname.split('/').length -1];
        Api.get("analCount",{id: id}).then( res => {
            this.setState({
                analCount: res.count
            })
        })
        Api.get("anal",{id: id}).then( res => {
            this.setState({
                anal: res.data
            })
        })
        Api.get("auto",{id: id}).then( res => {
            this.setState({
                auto: res.data
            })
        })
        Api.get("article",{id: id}).then( res => {

            this.setState({
                product: res
            })
        })
        Api.get("image",{id: id}).then( res => {
            res.data.map(img => {
                this.state.img.push(img.FileImage)
            })

        })


    }

    render() {

        let article = this.state.product;

        return(
            <div className="container">
                <div className="full_img" style={this.state.openFullImg? {display:"flex"}: {display: "none"}}>
                    <img src={this.state.fullImg} alt=""/>
                    <span className="full_img-icon" onClick={() => this.setState({openFullImg: false})}><FontAwesomeIcon icon={faTimesCircle} /></span>
                </div>
                <div className="title">
                    <p>АВТОЗАПЧАСТИ</p>
                    <p>Карточка детали: <span>{article?article.DataSupplierArticleNumber:''}</span> {article?article.ProductDescription:''}е</p>
                </div>
                <div className='detale_list'>

                    <nav className='articul_list'>
                        <div className='articul_list__header table_style_header'>
                            <ul>
                                <li>Свойство</li>
                                <li>Значение</li>
                            </ul>
                        </div>
                        <div className='articul_list__body table_style_body'>
                            <ul>
                                <li>Артикул</li>
                                <li>{article?article.DataSupplierArticleNumber:''}</li>
                            </ul>
                            <ul>
                                <li>Производитель</li>
                                <li>{article?article.ManufacturerDescription:''}</li>
                            </ul>
                            <ul>
                                <li>Наименование</li>
                                <li>{article?article.ProductDescription:''}</li>
                            </ul>
                            <ul>
                                <li>Код</li>
                                <li>{article?article.ID:''}</li>
                            </ul>
                            <ul>
                                <li>Вид продукции</li>
                                <li>{article?article.ProductNormalizedDescription:''}</li>
                            </ul>
                            <ul>
                                <li>Место установки</li>
                                <li>{article?article.AssemblyGroupDescription:''}</li>
                            </ul>
                            <ul>
                                <li>Назначение</li>
                                <li>{article?article.UsageDescription:''}</li>
                            </ul>
                        </div>
                    </nav>
                    <div className='articul_list_image'>
                        {
                            this.state.img != false?<SliderAuto autoImage={this.state.img}/>:''
                        }
                    </div>
                </div>

                <div className="detale_list_analog">

                    <nav className='articul_list_analog'>
                        <div className="analog__count">
                            <p>{'Аналоги ('+this.state.analCount +')'}</p>
                        </div>
                        <div className='articul_list_analog__header table_style_header'>
                            <ul className='analog__title'>
                                <li>Производитель</li>
                                <li>Артикул</li>
                                <li>Наименование</li>
                                <li>Фото</li>
                            </ul>
                        </div>
                        <div className='articul_list_analog__body table_style_body'>
                            {
                                this.state.anal?
                                    this.state.anal.map(anal => {
                                        return (
                                            <ul key={anal.ID}>
                                                <li>{anal.ManufacturerDescription}</li>
                                                <li>{anal.DataSupplierArticleNumber}</li>
                                                <li>{anal.ProductDescription}</li>
                                                <li className='anal__img'>
                                                    <img src={anal.FileIconFull} alt="" onClick={(e) => {
                                                        this.setState({
                                                            fullImg: anal.FileImageFull,
                                                            openFullImg: true
                                                        })
                                                    }}/>
                                                </li>


                                            </ul>
                                        )
                                    }): ''
                            }

                        </div>
                    </nav>

                    <nav className='articul_list_auto'>
                        <div className="auto__title"><p>Используется в автомобилях ({this.state.auto.length})</p></div>
                        <div className='articul_list_auto__header table_style_header'>
                            <ul className='auto__title'>
                                <li>Модель, комплектация</li>
                                <li>Период выпуска</li>
                                <li>Куб.см</li>
                                <li>Вид сборки</li>
                            </ul>
                        </div>

                        <div className='articul_list_auto__body table_style_body'>
                            {
                                this.state.auto?
                                    this.state.auto.map((auto,i) => {
                                        let fromYear = auto.ConstructionIntervalFrom.split('').slice(0,4).join('');
                                        let fromMonth = auto.ConstructionIntervalFrom.split('').slice(4, 6).join('');
                                        let toYear = auto.ConstructionIntervalTo.split('').slice(0,4).join('');
                                        let toMonth = auto.ConstructionIntervalTo.split('').slice(4, 6).join('');

                                        return(
                                            <ul key={i}>
                                                <li>{auto.FullDescription}</li>
                                                <li>{auto.ConstructionIntervalTo != 0? fromYear + '-' + fromMonth + ' ' + toYear + '-' + toMonth: fromYear + '-' + fromMonth}</li>
                                                <li>{auto.Ccm}</li>
                                                <li>{auto.KvBody}</li>
                                            </ul>
                                        )
                                    }):''
                            }
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}

const MapStateToProps = state => state;
const MainDetaleLists = connect(MapStateToProps)(DetaleLists);
export default MainDetaleLists;