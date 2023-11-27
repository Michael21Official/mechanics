import React, { useState, useEffect } from 'react';
import './Messenger.css';
import { UserData, Message, MessageImage } from '../../../../types/types';

function Messenger({ user, isAuthenticated }: { user: UserData; isAuthenticated: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageImages, setMessageImages] = useState<MessageImage[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Pobierz rzeczywiste dane z API lub użyj symulowanych danych

    // Symulowane dane
    const sampleMessages: Message[] = [
      {
        message_id: 1,
        user_id: user.user_id,
        content: 'Hello, how are you?',
        created_at: '',
      },
    ];

    const sampleMessageImages: MessageImage[] = [

    ];

    // Ustawienie danych w stanie komponentu
    setMessages(sampleMessages);
    setMessageImages(sampleMessageImages);
  }, [user.user_id]);

  const handleSendMessage = () => {
    // Handle sending the message logic here
    // Update the state or send the message to a server
    // Clear the input field
    if (newMessage.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          message_id: prevMessages.length + 1,
          user_id: user.user_id,
          content: newMessage,
          created_at: new Date().toISOString(),
        },
      ]);
      setNewMessage('');
    }
  };

  const renderMessageWithImages = (message: Message) => (
    <>
      {message.content} - {message.created_at}
      {messageImages
        .filter(image => image.message_id === message.message_id)
        .map(image => (
          <div key={image.message_image_id} className="image-item">
            <img
              src={`data:image/png;base64, ${image.image_data}`}
              alt={`Message Image ${image.message_image_id}`}
            />
            - {image.created_at}
          </div>
        ))}
    </>
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="messenger-container">
      <h2>Messenger</h2>
      {isAuthenticated ? (
        <div className="message-view">
          <ul className="message-list">
            {messages.map(message => (
              <li key={message.message_id} className="message-item">
                {renderMessageWithImages(message)}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p id="login-message">Please log in to use the messenger.</p>
      )}
    </div>
  );
}

export default Messenger;
