import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import 'bootstrap';
import './_global.scss'
import MessageBlock from "./components/MessageBlock/MessageBlock";
import SidebarMessage from "./components/SidebarMessage/SidebarMessage";
import Form from "./components/Form/Form";

function App() {

    let [message, setMessage]: any = useState([])

    return (
        <div className="container">
            <div className="height-block">
                <SidebarMessage/>
                <MessageBlock data={message}/>
            </div>
            <Form setMessage={setMessage} message={message}/>
        </div>
    );
}

export default App;
