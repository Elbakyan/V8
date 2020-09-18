export const USER_EXIST = "USER_EXIST";

// export function UserExist  () {
//     return (dispach) => {
//         setTimeout(() => {
//             dispach({
//                 type: USER_EXIST,
//                 payload:{status: true}
//             })
//         },2000)
//     }
// }
export const   UserExist = ()  => {
    return {type: USER_EXIST,payload: true}

}
