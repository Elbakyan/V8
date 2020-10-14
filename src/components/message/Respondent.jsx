import React, {Component} from "react";

const data = {
    name:'Vazgen',
    surname:'Bagratunyan',
    img:'https://bain.design/wp-content/uploads/2013/03/People-Avatar-Set-Rectangular-13.jpg'
}

class Respondent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="respondent_user">
                <div className="respondent_user_image" style={{backgroundImage:`url(${data.img})`}}>

                </div>
                <div className="respondent_user_name">
                    <div>
                        <span>{data.name}</span>
                        <span>{data.surname}</span>
                    </div>
                    <div>
                        <span>time</span>
                        <span>5</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Respondent