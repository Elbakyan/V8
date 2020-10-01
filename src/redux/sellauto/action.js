import {GET, POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";
export const GET_SELL = 'GET_SELL';

export function GetSell(limit,data = null) {
    return async (dispach) => {
        let body;
        data != null ? body = new FormData(data) :body = new FormData()
        body.append('limit', limit)

        POST(Url.getsell,body).then(data=> {
            console.log(data)
            dispach({
                type: GET_SELL,
                payload: data
            })

        })

    }
}
