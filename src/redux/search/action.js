
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const SEARCH_RESULT_ANAL_COUNT = 'SEARCH_RESULT_ANAL_COUNT';
export const SEARCH_RESULT_ANAL = 'SEARCH_RESULT_ANAL';
export const SEARCH_RESULT_AUTO = 'SEARCH_RESULT_AUTO';
export const SEARCH_RESULT_IMG = 'SEARCH_RESULT_IMG';
export const SEARCH_RESULT_PRODUCT = 'SEARCH_RESULT_PRODUCT';

export function SearchResult(data){
    return (dispach) => {
        dispach({
            type: SEARCH_RESULT,
            payload: data
        })
    }
}
export function SearchResultAnalCount(data){
    return (dispach) => {
        dispach({
            type: SEARCH_RESULT_ANAL_COUNT,
            payload: data
        })
    }
}
export function SearchResultAnal(data){
    return (dispach) => {
        dispach({
            type: SEARCH_RESULT_ANAL,
            payload: data
        })
    }
}
export function SearchResultAuto(data){
    return (dispach) => {
        dispach({
            type: SEARCH_RESULT_AUTO,
            payload: data
        })
    }
}
export function SearchResultImg(data){
    return (dispach) => {
        dispach({
            type: SEARCH_RESULT_AUTO,
            payload: data
        })
    }
}
export function SearchResultProduct(data){
    return (dispach) => {
        dispach({
            type: SEARCH_RESULT_PRODUCT,
            payload: data
        })
    }
}



