import {GET, POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";
export const GET_SELL = 'GET_SELL';

export function GetSell(limit) {
    return async (dispach) => {
        let data = new FormData()
        data.append('limit', limit)
        POST(Url.getsell,data).then(data=> {
            dispach({
                type: GET_SELL,
                payload: data
            })

        })

    }
}
