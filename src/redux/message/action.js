import {POST} from "../../components/config/Requsest";
import {Url} from "../../components/config/Url";

export const GET_MESSAGE = 'GET_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_ID = 'GET_ID';
export const GET_DIALOG_ID = 'GET_DIALOG_ID';
export const GET_STATUS = 'GET_STATUS';
export const GET_MESSAGE_ID = 'GET_MESSAGE_ID';
export const GET_MESSAGE_DIALOG_ID = 'GET_MESSAGE_DIALOG_ID';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';

export function SendMessage(data) {
    return (dispach) => {
        POST(Url.sendMessage,data).then(res => {
            dispach({
                type: SEND_MESSAGE,
                payload: res
            })
        })
    }
}

export function GetMessage(id) {
    let data = new FormData();
    data.append('id', id);
    return (dispach) => {
        POST(Url.dialog,data).then(res => {
            if(res.message.score){
                let status = false
                res.message.score.map((el)=>{
                    if(+el.status){
                        status = true
                        // dispach(Notifications(+el.status))
                    }
                })
                if(status){
                    dispach(Notifications(true))
                }else{
                    dispach(Notifications(false))
                }
            }
            if(res.message.user){
                let status = false
                res.message.user.map((el)=>{
                    if(+el.status){
                        status = true
                        // dispach(Notifications(+el.status))
                    }
                })

                if(status){
                    dispach(Notifications(true))
                }else{
                    dispach(Notifications(false))
                }

            }
            dispach({
                type: GET_MESSAGE,
                payload: res

            })
        })

    }
}
export function GetMessageDialogId(id,dialogId) {
    let data = new FormData();
    data.append('id', id);
    data.append('dialog_id', dialogId);
    return (dispach) => {
        POST(Url.getMessage,data).then(res => {
            dispach({
                type: GET_MESSAGE_DIALOG_ID,
                payload: res
            })
        })
    }
}
export function GetId(id) {
    return (dispach) => {
            dispach({
                type: GET_ID,
                payload: id

            })

    }
}
export function GetMessageId(id) {
    return (dispach) => {
        dispach({
            type: GET_MESSAGE_ID,
            payload: id
        })

    }
}
export function GetDialogId(id) {
    return (dispach) => {
        dispach({
            type: GET_DIALOG_ID,
            payload: id

        })
    }
}

export function GetStatus(data) {
    let statusData = new FormData()
    statusData.append('id', data)

    return (dispach) => {
        POST(Url.messageStatus,statusData).then(res => {
            console.log('status',res)
            dispach({
                type: GET_STATUS,
                payload: res

            })
        })

    }
}

export function Notifications(boolean) {
    return (dispach) => {
        dispach({
            type: GET_NOTIFICATION,
            payload: boolean
        })
    }
}
