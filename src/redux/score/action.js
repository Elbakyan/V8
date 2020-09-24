import {Url} from "../../components/config/Url";
import {GET} from "../../components/config/Requsest";
export const SCORE_EXIST = "SCORE_EXIST";

export function ScoreExist  () {
    return async (dispach) => {
        GET(Url.existScore).then(res => {
            dispach({
                type: SCORE_EXIST,
                payload: res
            })
        })
    }
}
