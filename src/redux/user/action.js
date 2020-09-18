import {Url} from "../../components/config/Url";
export const USER_EXIST = "USER_EXIST";

export function UserExist  () {
    return async (dispach) => {
    const response = await  fetch(Url.existUser);
    const data = await response.json();
        dispach({
            type: USER_EXIST,
            payload: data
        })
    }
}
