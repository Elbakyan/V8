export const royle = [
    {
        id:0,
        name:'Ղեկ․․․'
    },
    {
        id:1,
        name:'Ձախ'
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
    },
    {
        id:1,
        name:'Կարմիր',
    },
    {
        id:2,
        name:'Նարնջագույն',
    },
    {
        id:3,
        name:'Դեղին',
    },
    {
        id:4,
        name:'Դեղնականաչ',
    },
    {
        id:5,
        name:'Կանաչ',
    },
    {
        id:6,
        name:'Զմրուխտ',
    },
    {
        id:6,
        name:'Կապտականաչ',
    },
    {
        id:7,
        name:'Երկնագույն',
    },
    {
        id:8,
        name:'Կապույտ',
    },
    {
        id:9,
        name:'Մանուշակագույն',
    },
    {
        id:10,
        name:'Բաց վարդագույն',
    },
    {
        id:11,
        name:'Վարդագույն',
    },
    {
        id:12,
        name:'Սպիտակ',
    },
    {
        id:13,
        name:'Սև',
    },
    {
        id:14,
        name:'Արծաթագույն',
    },
    {
        id:15,
        name:'Մոխրագույն',
    },
    {
        id:16,
        name:'Վարդագույն',
    },
    {
        id:17,
        name:'Բեժ',
    },
    {
        id:18,
        name:'Սմբուկագույն',
    },
    {
        id:19,
        name:'Բալագույն',
    },
    {
        id:20,
        name:'Ոսկեգույն',
    },
    {
        id:21,
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
        id:9,
        name:'Մինիվեն'
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
        id:8,
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
        id:2,
        name:'Մեխանիկական'
    },
    {
        id:3,
        name:'Ավտոմատ'
    },
    {
        id:4,
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
            if(i === 0 && j >= 8){
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
        name: 'Քարշակ...'
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

];
export const  sort =[
    {
        id: 0,
        name: 'Դասավորել․․․'
    },
    {
        id: 1,
        name: 'Թարմերը․․․'
    },
    {
        id: 2,
        name: 'Էժաները․․․'
    },
    {
        id: 3,
        name: 'Թանկերը․․․'
    },
    {
        id: 4,
        name: 'Շատ դիտվածները․․․'
    },


]


// export  const

