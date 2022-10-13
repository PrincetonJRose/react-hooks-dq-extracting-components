import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Message from './Message'

function MessageContainer ( props ) {

    const messages = props.messages
    // console.log( messages )

    const renderMessages = messages.map( message =>
        <Message
            message = { message }
            key = { message.id }
        />)

    return(
        <Fragment>
            <h2>Messages</h2>
            <section className="messages">
                <ul>
                    { renderMessages }
                </ul>
            </section>
        </Fragment>
    )
}

export default MessageContainer