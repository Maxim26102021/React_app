import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import 'bootstrap';
import './_global.scss'
import Messages from "./components/Messages/Messages";
import MessageBlock from "./components/MessageBlock/MessageBlock";

function App() {
    interface Message {
        text: string,
        author: string,
        date: any
    }

    let dateH = new Date().getHours()
    let dateM = new Date().getMinutes()


    let message: any = useState([])
    let messages: any = message[0];
    let setMessages: object = message[1]


    let [value, setValue] = useState('');
    let text: string = value;


    let newMessage: Message = {
        text: text,
        author: 'max',
        date: `${dateH}h ${dateM}m`
    }


    const handleChange = (event: any) => {
        setValue(event.target.value)
    }

    const sendMessage = () => {
        // @ts-ignore
        setMessages([...messages, newMessage])
        setValue('')
    }

    useEffect(() => {
        // @ts-ignore
        if(messages[messages.length - 1]?.author === 'max') {
            let newMessage: Message = {
                text: 'hhhhшшш1111oo0',
                author: 'shadow',
                date: `${dateH}h ${dateM}m`
            }
            let time = setTimeout(() => {
                // @ts-ignore
                setMessages([...messages, newMessage])
            }, 2000)
        }
    }, [messages])

    const pressEnter = (e: any) => {
        if(e.code ==  "Enter") {
            sendMessage()
        }
    }
    return (
    <div className="container">
        <MessageBlock data = {messages} />
        <form action="#" className="form" onKeyDown={pressEnter}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-white" >Create message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={value} onChange={handleChange}></ textarea>
            </div>
            <button type="button" className="btn btn-primary mt-2" onClick={sendMessage}>Send</button>
        </form>

    </div>
  );
}

export default App;
