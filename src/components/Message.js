import React from 'react';

const Message = ({status,message})=>{
    return(
        <div className="msg-cont">
            <p className={`status ${status.toLowerCase()}`}>{status + ' !'}</p>
            <p className={`message ${status.toLowerCase()}`}>{message}</p>
        </div>
    );
}

export default Message;
