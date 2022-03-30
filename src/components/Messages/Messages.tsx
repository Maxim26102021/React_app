const Messages = (props: any) => {
    return (
        <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..."/>
                    <strong className="me-auto">{props.data.author}</strong>
                    <small>{props.data.date}</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {props.data.text}
            </div>
        </div>
    )
}


export default Messages