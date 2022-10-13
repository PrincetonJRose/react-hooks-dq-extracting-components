import React from 'react'
import Contact from './Contact'

function ContactContainer ( props ) {

    // const { pizza } = props
    // const pizza = props.pizza

    
    // const { contacts } = props
    // const contacts = props.contacts

    // console.log( props )
    
    return (
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
                {
                    props.contacts.map( contact =>
                        <Contact
                            contact = { contact }
                            key = { contact.id }
                        />
                    )
                }
            </ul>
        </nav>
    )

}

export default ContactContainer