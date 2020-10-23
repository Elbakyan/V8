import {POST, TEST_POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const TMP_IMG = 'TMP_IMG';
export const CLEAR_IMG = 'CLEAR_IMG';

export function TmpImg (data){

    return (dispach) => {
        POST(Url.tmpimg,data).then(res => {
            console.log(res)
            dispach({
                type: TMP_IMG,
                payload: res
            })
            if (res){
                setTimeout(() => {
                    let del = new FormData();
                    del.append('delite', true)
                    POST(Url.tmpimg,del)
                },(2000 * 60))
            }
        })
    }
}
export function ClearImg (){
    return (dispach) => {
        let del = new FormData();
        del.append('delite', true)
        fetch(Url.tmpimg,{
            method: 'POST',
            body:del
        })
        dispach({
            type: CLEAR_IMG,
            payload: {status: false,data: []}
        })

    }
}