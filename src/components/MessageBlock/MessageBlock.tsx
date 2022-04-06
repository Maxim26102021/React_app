import './MessageBlock.scss'
import Messages from "../Messages/Messages";
import React, {useMemo, useRef, useState} from "react";

const MessageBlock = ({data} :any) => {


    return (
        <div className="App-message">{data.map((el: any) => {
            return <Messages data={el} key={el.text.toString()}/>
        })}</div>
    )
}

export default MessageBlock;