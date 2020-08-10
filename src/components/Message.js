import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

const Message = ({mensaje, funcion}) => {
    return (
        <div className="message-text">
            <p>{mensaje}</p>
            <button
                onClick={funcion}
            ><AiOutlineDelete /></button>
        </div>
    );
}

export default Message;