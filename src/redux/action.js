import {USER_EXIST} from "./user/action";

export const USER = 'USER'

export const ext = () => {
    return {
        type:USER,
        payload:true
    }
}

export const   UserExist = ()  => {
    return {type: USER_EXIST,payload: true}

}
