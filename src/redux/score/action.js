import {Url} from "../../components/config/Url";
import {GET} from "../../components/config/Requsest";
export const SCORE_EXIST = "SCORE_EXIST";
export const GET_SCORE_LIST = "GET_SCORE_LIST";
export const GET_PRODUCT = "GET_PRODUCT";


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
export function GetScoreList  () {
    return async (dispach) => {
        GET(Url.getscorelist).then(res => {
            dispach({
                type: GET_SCORE_LIST,
                payload: res
            })
        })
    }
}
export function GetProduct  () {
    return async (dispach) => {
        GET(Url.getproduct).then(res => {
            dispach({
                type: GET_PRODUCT,
                payload: res
            })
        })
    }
}