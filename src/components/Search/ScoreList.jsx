import React, {Component} from "react";

class ScoreList extends Component{
    render() {
        return(
            <div className="score_list">

                    <nav className='score_list_info'>
                        <div className='score_list_info__header table_style_header'>
                            <ul>
                                <li>Պահեստամասի համարը</li>
                                <li>Պահեստամասի անվանումը</li>
                                <li>Արժեքը</li>
                                <li>Ընկերությունը</li>
                                <li>Հեռախոսահամրը</li>
                            </ul>
                        </div>
                        <div className='score_list_info__body table_style_body'>
                            <ul>
                                <li>Պահեստամասի համարը</li>
                                <li>Պահեստամասի անվանումը</li>
                                <li>Արժեքը</li>
                                <li>Ընկերությունը</li>
                                <li>Հեռախոսահամրը</li>
                            </ul>
                        </div>
                    </nav>

            </div>
        )
    }
}

export default ScoreList;