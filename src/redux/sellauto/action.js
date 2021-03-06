import {POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";
export const GET_SELL = 'GET_SELL';
export const GET_SELL_BY_ID = 'GET_SELL_BY_ID';

export function GetSell(limit = 1,data = null) {
    return async (dispach) => {
        let body;
        data != null ? body = new FormData(data) :body = new FormData()
        body.append('limit', limit - 1)
        POST(Url.getsell,body).then(data=> {
            dispach({
                type: GET_SELL,
                payload: data
            })

        })

    }
}
export function GetSellByID(id) {
    return async (dispach) => {
        let data = new FormData();
        data.append('id', id)
        POST(Url.getsellautobyid,data).then(res=> {
            dispach({
                type: GET_SELL_BY_ID,
                payload: res
            })

        })

    }
}
