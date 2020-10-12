import {Url} from "../../components/config/Url";
import {GET} from "../../components/config/Requsest";
import {user} from "./user";
export const USER_EXIST = "USER_EXIST";

export function UserExist  () {
    return async (dispach) => {
    GET(Url.existUser).then(res => {
        dispach({
            type: USER_EXIST,
            payload: res
        })
    })


    }
}
