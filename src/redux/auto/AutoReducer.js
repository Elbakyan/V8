import {GET_MODEL, GET_MARK} from "./action";

const initalState = {
    mark: [],
    model: [],
    year:(()=>{
        let temp = [];
        let year = new Date().getFullYear();
        for (let i = year; i >= 1915; i--){
            temp.push(i);
        }
        return temp;
    })(),
    color:[
        {
            id:1,
            name:'Կարմիր',
            color:'#FF0000'
        },
        {
            id:2,
            name:'Նարնջագույն',
            color:'#FF8000'
        },
        {
            id:3,
            name:'Դեղին',
            color:'#FFFF00'
        },
        {
            id:4,
            name:'Դեղնականաչ',
            color:'#80FF00'
        },
        {
            id:5,
            name:'Կանաչ',
            color:'#00FF00'
        },
        {
            id:6,
            name:'Զմրուխտ',
            color:'#00FF80'
        },
        {
            id:6,
            name:'Կապտականաչ',
            color:'#00FFFF'
        },
        {
            id:7,
            name:'Երկնագույն',
            color:'#0080FF'
        },
        {
            id:8,
            name:'Կապույտ',
            color:'#0000FF'
        },
        {
            id:9,
            name:'Մանուշակագույն',
            color:'#8000FF'
        },
        {
            id:10,
            name:'Բաց վարդագույն',
            color:'#FF00FF'
        },
        {
            id:11,
            name:'Վարդագույն',
            color:'#FF0080'
        },
    ],
    engine:(() => {
        let temp = [];
        let year = new Date().getFullYear();
        for (let i = 0; i < 7; i++){
            if(i> 0 ){
                temp.push(i + '.0')
                temp.push(i + '.0 T')
            }
            for (let j = 1; j < 10; j++){
                temp.push(i + '.' + j)
                temp.push(i + '.' + j + ' T')
            }
        }
        temp.push("7.0")
        temp.push("7.0 T")
        return temp;
    })(),
}




export default function autoReducer(state = initalState, action){
    switch (action.type){
        case GET_MARK:
            return {...state, mark: action.payload}
        case GET_MODEL:
            return {...state, model: action.payload}
    }
    return state;

}