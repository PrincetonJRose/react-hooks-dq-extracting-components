import React from 'react'

export default function Contact( props ) {

    // console.log( props )

    const { contact } = props
    return (
        <li className="contact">
            <div className="icon">{ contact.name[0] }</div>
            { contact.name }
        </li>
    )
}