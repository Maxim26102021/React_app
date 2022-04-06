import React, {useEffect, useState} from 'react';
import './Form.scss'

interface Message {
    text: string,
    author: string,
    date: any
}

const Form = ({setMessage, message}: any) => {
    let [value, setValue] = useState('');
    let text: string = value;

    const dateH = new Date().getHours()
    const dateM = new Date().getMinutes()

    const handleChange = (event: any) => {
        setValue(event.target.value)
    }

    const sendMessage = (e: any) => {
        e.preventDefault();



        let newMessage: Message = {
            text: text,
            author: 'max',
            date: `${dateH}h ${dateM}m`
        }

        setMessage([...message, newMessage])
        setValue('')
    }

    useEffect(() => {
        // @ts-ignore
        if (message[message.length - 1]?.author === 'max') {
            console.log('ff')
            let newMessage: Message = {
                text: 'hhhhшшш1111oo0',
                author: 'shadow',
                date: `${dateH}h ${dateM}m`
            }
            let time = setTimeout(() => {
                // @ts-ignore
                setMessage([...message, newMessage])
            }, 2000)
        }
    }, [message])

    return (
        <form action="#" className="form" onSubmit={sendMessage}>
            <label htmlFor="Input-text" className="form-label form-color">Type something</label>
            <input autoFocus={true} type="text" className="form-control" id="Input-text" value={value}
                   aria-describedby="text" onChange={handleChange}/>
            <button type="button" className="btn btn-primary mt-2" onClick={sendMessage}>Send</button>
        </form>
    );
};

export default Form;