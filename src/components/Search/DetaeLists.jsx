import React, {Component} from "react";
import SliderAuto from "../SliderAuto/SliderAuto";
let data = [
    'http://web.nirax.ru/cross/image/55/00215160503.jpg',
    'http://web.nirax.ru/cross/image/29/00215160603.jpg',
    'http://web.nirax.ru/cross/image/29/00215160703.jpg'
]
class DetaleLists extends Component{
    render() {
        return(
            <div className="container">
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
                                <li>Свойство</li>
                                <li>Значение</li>
                            </ul>
                            <ul>
                                <li>Свойство</li>
                                <li>Значение</li>
                            </ul>
                            <ul>
                                <li>Свойство</li>
                                <li>Значение</li>
                            </ul>
                        </div>
                    </nav>
                    <div className='articul_list_image'>
                        <SliderAuto autoImage={data}/>
                    </div>
                </div>

                <div className="detale_list_analog">

                    <nav className='articul_list_analog'>
                        <div className='articul_list_analog__header table_style_header'>
                            <ul>
                                <li>Производитель</li>
                                <li>Артикул</li>
                                <li>Наименование</li>
                                <li>Фото</li>
                            </ul>
                        </div>
                        <div className='articul_list_analog__body table_style_body'>
                            <ul>
                                <li>Производитель</li>
                                <li>Артикул</li>
                                <li>Наименование</li>
                                <li>Фото</li>
                            </ul>
                            <ul>
                                <li>Производитель</li>
                                <li>Артикул</li>
                                <li>Наименование</li>
                                <li>Фото</li>
                            </ul>
                            <ul>
                                <li>Производитель</li>
                                <li>Артикул</li>
                                <li>Наименование</li>
                                <li>Фото</li>
                            </ul>
                        </div>
                    </nav>

                    <nav className='articul_list_auto'>
                        <div className='articul_list_auto__header table_style_header'>
                            <ul>
                                <li>Модель, комплектация</li>
                                <li>Период выпуска</li>
                                <li>Куб.см</li>
                                <li>Вид сборки</li>
                            </ul>
                        </div>
                        <div className='articul_list_auto__body table_style_body'>
                            <ul>
                                <li>Производитель</li>
                                <li>Артикул</li>
                                <li>Наименование</li>
                                <li>Фото</li>
                            </ul>
                            <ul>
                                <li>Производитель</li>
                                <li>Артикул</li>
                                <li>Наименование</li>
                                <li>Фото</li>
                            </ul>
                            <ul>
                                <li>Производитель</li>
                                <li>Артикул</li>
                                <li>Наименование</li>
                                <li>Фото</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}
export default DetaleLists