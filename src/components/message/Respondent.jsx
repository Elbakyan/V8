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
            <div className={this.props.active?"respondent_user respondent_user_active":"respondent_user"}>
                <div className="click" onClick={this.props.onClick} id={this.props.id} data-id={this.props.data.id}></div>
                <div className="respondent_user_image" style={{backgroundImage:`url(${this.props.data.img})`}}>

                </div>
                <div className="respondent_user_name">
                    <div>
                        <span>{this.props.data.name}</span>
                        <span>{this.props.data.surname}</span>
                    </div>
                    <div>
                        <span>{this.props.time.split(' ')[1]}</span>
                        <span>{this.props.status}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Respondent