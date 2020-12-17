import {POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const SEARCH_RESULT = 'SEARCH_RESULT';
export const SEARCH_RESULT_ANAL_COUNT = 'SEARCH_RESULT_ANAL_COUNT';
export const SEARCH_RESULT_ANAL = 'SEARCH_RESULT_ANAL';
export const SEARCH_RESULT_AUTO = 'SEARCH_RESULT_AUTO';
export const SEARCH_RESULT_IMG = 'SEARCH_RESULT_IMG';
export const SEARCH_RESULT_PRODUCT = 'SEARCH_RESULT_PRODUCT';
export const SEARCH_SCORE_LISTS = 'SEARCH_SCORE_LISTS';
export const SEARCH_MARK_MODEL = 'SEARCH_MARK_MODEL';
export const GET_ID = 'GET_ID';
export const GET_SEARCH_MARK_MODEL_LINK = 'GET_SEARCH_MARK_MODEL_LINK';

export function SearchResult(data){
    return (dispatch) => {
        dispatch({
            type: SEARCH_RESULT,
            payload: data
        })
    }
}
export function SearchResultAnalCount(data){
    return (dispatch) => {
        dispatch({
            type: SEARCH_RESULT_ANAL_COUNT,
            payload: data
        })
    }
}
export function SearchResultAnal(data){
    return (dispatch) => {
        dispatch({
            type: SEARCH_RESULT_ANAL,
            payload: data
        })
    }
}
export function SearchResultAuto(data){
    return (dispatch) => {
        dispatch({
            type: SEARCH_RESULT_AUTO,
            payload: data
        })
    }
}
export function SearchResultImg(data){
    return (dispatch) => {
        dispatch({
            type: SEARCH_RESULT_AUTO,
            payload: data
        })
    }
}
export function SearchResultProduct(data){
    return (dispatch) => {
        dispatch({
            type: SEARCH_RESULT_PRODUCT,
            payload: data
        })
    }
}
export function SearchScoreLists(data){
    return (dispatch) => {
        dispatch({
            type: SEARCH_SCORE_LISTS,
            payload: data
        })
    }
}

export function GetStoreID(data){
    return (dispatch) => {
        dispatch({
            type: GET_ID,
            payload: data
        })
    }
}

export function SearchMarkModel(data) {
    return async (dispatch) => {
        POST(Url.searchmarkmodel, data).then(res=> {
            dispatch({
                type: SEARCH_MARK_MODEL,
                payload: res
            })

        })

    }
}
export function GetSearchMarkModelLink(link){

    return (dispatch) => {
        dispatch({
            type: GET_SEARCH_MARK_MODEL_LINK,
            payload: link
        })
    }
}


