import {USER_EXIST} from "./action";
import {user} from "./user";

const initialState = {
    // id:25,
    status:undefined,
    // data:{
    //     city: "Շենգավիթ",
    //     email: "vbagratunyan@gmail.ru",
    //     img: "https://elbakyan.am/Server/img/user/avatar/-1600089865.png",
    //     name: "Vazgen",
    //     phone: "37494009935",
    //     sircle: "Երևան",
    //     surname: "Bagratunyan"
    // }
}

export default function UserExistReducer(state = initialState,action){

    switch (action.type) {
        case USER_EXIST:
            return action.payload
        default:
            return state;
    }

}