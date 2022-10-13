import React from "react";
import { messages, contacts } from "../data";
import ContactContainer from './ContactContainer'
import MessageContainer from "./MessageContainer"

// console.log("Messages:", messages);
// console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactContainer contacts = { contacts } />
      <main>
        <MessageContainer messages = { messages } />
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

export default App;
