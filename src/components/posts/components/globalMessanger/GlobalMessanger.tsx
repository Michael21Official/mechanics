// GlobalMessenger.tsx

import React, { useState, useEffect, useRef } from 'react';
import './GlobalMessenger.css';

interface GlobalMessage {
    id: number;
    sender: string;
    content: string;
}

interface GlobalMessengerProps {
    globalMessages: GlobalMessage[];
}

const GlobalMessenger: React.FC<GlobalMessengerProps> = ({ globalMessages }) => {
    const [newMessage, setNewMessage] = useState('');
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = () => {
        const newMessageObj: GlobalMessage = {
            id: globalMessages.length + 1,
            sender: 'User',
            content: newMessage,
        };

        setNewMessage('');
        // You might want to update the state or send the message to a server here
    };

    // Scroll to the bottom when messages change
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [globalMessages]);

    // Example messages for testing
    const exampleMessages: GlobalMessage[] = [
        { id: 1, sender: 'Admin', content: 'Welcome to the chat!' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        { id: 6, sender: 'Michal', content: 'Dawaj tortu XD' },
        { id: 3, sender: 'Admin', content: 'How can I help you?' },
        // ... other example messages
    ];


    return (
      <>
        <div className="global-messenger-container" ref={messagesContainerRef}>
            {exampleMessages.map((message) => (
                <div className="message" key={message.id}>
                    <strong>{message.sender}:</strong> {message.content}
                </div>
            ))}
            {globalMessages.map((message) => (
                <div className="message" key={message.id}>
                    <strong>{message.sender}:</strong> {message.content}
                </div>
            ))}
        </div>
        <div className="input-section">
        <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Wpisz wiadomość..."
            className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">
            Wyślij
        </button>
    </div>
    </>
    );
};

export default GlobalMessenger;
