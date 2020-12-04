import React from "react";
import './Decor.scss';
export  default function DecorTitle(props){
    return(
        <div className='container'>
            <h2 className='decor__title' style={{fontSize: props.fontSize}}>{props.title}</h2>
        </div>
    )
}