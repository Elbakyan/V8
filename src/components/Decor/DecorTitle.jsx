import React from "react";
import './Decor.scss';
export  default function DecorTitle(props){
    let size = false;
    if (window.innerWidth <= 480){
        size = '14px'
    }else{
        size = false
    }
    return(
        <div className='container'>
            <h2 className='decor__title' style={{fontSize: size ? size:props.fontSize}}>{props.title}</h2>

        </div>
    )
}