import React from 'react'

function Message ( props ) {

    const { message } = props
    // console.log( message )

    return (
        <li className={ "message " + message.type } >
            <div className="icon">{ message.name[0] }</div>
            <span className="content">{ message.content }</span>
        </li>
    )
}

export default Message