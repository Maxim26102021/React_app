import Messages from "../Messages/Messages";
import React from "react";

const MessageBlock = (props:Array<any>) => {
    return (
        <div className="App-message">{props.data.map((el: any) => {
            return <Messages data={el}/>
        })}</div>

    )
}

export default MessageBlock;