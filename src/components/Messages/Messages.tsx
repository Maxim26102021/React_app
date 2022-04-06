import './Messages.scss'
import {useEffect, useMemo, useRef} from "react";

let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r6JLzg7t4O9HLayeMjzvfQ9sSX3xnlbeTg&usqp=CAU"

const Messages = (props: any) => {
    let scrolling = useRef<HTMLInputElement>(null)

    useEffect(() => {
        // @ts-ignore
            scrolling.current.scrollIntoView()
    }, [props])

    return (
        <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <img src={imageUrl} className="rounded me-2 image-size" alt="..."/>
                    <strong className="me-auto">{props.data.author}</strong>
                    <small>{props.data.date}</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {props.data.text}
            </div>
            <div ref={scrolling}></div>
        </div>
    )
}


export default Messages