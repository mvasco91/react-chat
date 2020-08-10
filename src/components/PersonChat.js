import React from 'react';

import { AiOutlineSend } from "react-icons/ai";
import Message from './Message';

export default class PersonCHat extends React.Component {

    state = {
        mensajes: [],
        text: '',
    }

    handleChange = event => {
        this.setState({ text: event.target.value })
    }

    handleSubmit = val => {
        this.setState({
            text: '',
            mensajes: [...this.state.mensajes, val]
        })
    }

    handleDelete = index => {
        const deleteMessage = [...this.state.mensajes];
            deleteMessage.splice(index, 1);
            this.setState({
                text:"",
                mensajes: deleteMessage
            })
    }


    render() {
        return (
            <div className="person-chat-container">
                <div className="header-chat">
                    <h2>Ventana de chat</h2>
                </div>
                        {this.state.mensajes.map((mensaje, index) => (
                            <Message key={index} mensaje={mensaje} funcion={()=> this.handleDelete(index)} />

                        ))}
                <div className="input-container">
                    <input
                        name="chatText"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="Escribe el mensaje..."
                    />
                    <button
                        onClick={() => this.handleSubmit(this.state.text)}
                    ><AiOutlineSend/></button>
                </div>
            </div>
        );
    }
}