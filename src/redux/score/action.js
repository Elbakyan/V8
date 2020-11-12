import {Url} from "../../components/config/Url";
import {GET} from "../../components/config/Requsest";
export const SCORE_EXIST = "SCORE_EXIST";
export const GET_SCORE_LIST = "GET_SCORE_LIST";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_MARK_MODEL_AUTO_PARTS = "GET_MARK_MODEL_AUTO_PARTS";
export const GET_ID = "GET_ID";


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
export function GetMarkModelAutoParts  () {
    return async (dispach) => {
        GET(Url.getMarkModelAutoParts).then(res => {
            dispach({
                type: GET_MARK_MODEL_AUTO_PARTS,
                payload: res
            })
        })
    }
}
export function GetScoreListId  (id) {
    return (dispach) => {
            dispach({
                type: GET_ID,
                payload: id
            })
    }
}