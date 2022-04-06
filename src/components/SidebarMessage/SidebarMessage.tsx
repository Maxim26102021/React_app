import React from 'react';
import './SidebarMessage.scss'

let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r6JLzg7t4O9HLayeMjzvfQ9sSX3xnlbeTg&usqp=CAU"

const SidebarMessage = (props: any) => {
    return (
        <div className="btn-gr">
            <a href="#" className="link"><img src={imageUrl} className="rounded float-start images" alt="..."/>User</a>
            <a href="#" className="link"><img src={imageUrl} className="rounded float-start images" alt="..."/>User</a>
        </div>
    );
};

//rscp

export default SidebarMessage;