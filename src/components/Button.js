import React from 'react';

const Button = ({sign,func})=>{
    return (
    <button onClick={func}>
        <i className={`fa-solid ${sign}`}></i>
    </button>
    );
}

export default Button;
