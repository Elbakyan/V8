import {GET} from "./config/Requsest";

GET("https://www.cbr-xml-daily.ru/daily_json.js").then(res =>{
    console.log(res)
})