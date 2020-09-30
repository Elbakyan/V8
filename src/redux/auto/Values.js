export const royle = [
    {
        id:0,
        name:'Ղեկ․․․'
    },
    {
        id:1,
        name:'ձախ'
    },
    {
        id:2,
        name:'Աջ'
    }
];

export  const color = [
    {
        id:0,
        name:'Գույն․․․',
        color:'#000000'
    },
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
    {
        id:12,
        name:'Այլ',
        color:'#FF0080'
    }

];

export const fuel = [
    {
        id:0,
        name:'Վառելիք․․․'
    },
    {
        id:1,
        name:'Բենզին'
    },
    {
        id:2,
        name:'Բենզին/Բնական գազ'
    },
    {
        id:4,
        name:'Բենզին/Հեղուկ գազ'
    },
    {
        id:3,
        name:'Դիզել'
    },
    {
        id:5,
        name:'Հիբրիդ'
    },
    {
        id:6,
        name:'Էլեկտրական'
    }
];

export const type = [
    {
        id:0,
        name:'Թափք․․․'
    },
    {
        id:1,
        name:'Սեդան'
    },
    {
        id:2,
        name:'Ամենագնաց'
    },
    {
        id:3,
        name:'Կուպե'
    },
    {
        id:4,
        name:'Հետչբեկ'
    },
    {
        id:5,
        name:'ՈՒնիվերսալ'
    },
    {
        id:6,
        name:'Կաբրիոլետ'
    },
    {
        id:7,
        name:'Պիկապ'
    },
    {
        id:7,
        name:'Լիմոզին'
    },
];

export const category = [
    {
        id:0,
        name:'ՏՄ Տեսակ․․․'
    },
    {
        id:1,
        name:'ԹԵԹԵՎ ՄԱՐԴԱՏԱՐ'
    },
    {
        id:2,
        name:'ԲԵՌՆԱՏԱՐ'
    },
    {
        id:3,
        name:'ԱՎՏՈԲՈՒՍ'
    },
    {
        id:4,
        name:'ՄԻԿՐՈԱՎՏՈԲՈՒՍ'
    }
];

export const transmission = [
    {
        id:1,
        name:'Փոխանցման տուփ․․․'
    },
    {
        id:1,
        name:'Մեխանիկական'
    },
    {
        id:1,
        name:'Ավտոմատ'
    },
    {
        id:1,
        name:'Տիպտրոնիկ'
    }
];

export const year = (()=>{
    let temp = ["Տարեթիվ․․․"];
    let year = new Date().getFullYear();
    for (let i = year; i >= 1975; i--){

        temp.push(i);
    }
    return temp;
})();

export const engine = (() => {
    let temp = ["Շարժիչ․․․"];
    for (let i = 0; i < 7; i++){
        if(i > 0 ){
            temp.push(i + '.0')
        }
        for (let j = 1; j < 10; j++){
            if(i == 0 && j >= 8){
                temp.push(i + '.' + j)
            }else if(i > 0){
                temp.push(i + '.' + j)
            }
        }
    }
    temp.push("7.0")
    return temp;
})();

export const  traction =[
    {
        id: 0,
        name: 'Քարշակ'
    },
    {
        id: 1,
        name: 'Արջևի քարշակ'
    },
    {
        id: 2,
        name: 'Հետևի քարշակ'
    },
    {
        id: 3,
        name: 'Լիաքաշակ'
    },

]


// export  const

