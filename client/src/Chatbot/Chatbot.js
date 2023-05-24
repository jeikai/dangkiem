import React, { useState, useRef } from 'react';
import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import './Chatbot.scss';
import { IoMdSend } from "react-icons/io";
const API_KEY = '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';
const systemMessage = {
  role: 'system',
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};
export default function Chatbot() {
  const scrollRef = useRef();
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your assistance! Ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
    if (input.length > 0) {
      setInput('');
    }
  };
  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.message };
    });
    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT',
          },
        ]);
        setIsTyping(false);
      });
  }

  const labelProps = {
    variant: 'small',
    color: 'blue',
    className:
      'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-bold',
  };
  const dialogRef = React.useRef(null);
  const openChatWindow = () => {
    dialogRef.current.showModal();
  };

  return (
    <div>
      <dialog ref={dialogRef}>
        <div className="chatcontainer">
          <Card className="w-full max-w-[24rem]">
            <Typography variant="h3" color="Blue" className="p-10 chat-header">
              Trò chuyện với chatbot
            </Typography>
            <CardBody className="flex flex-col gap-4">
              <div className="chat-messages">
                {messages.map((message, index) => {
                  return (
                    <div ref={scrollRef} key={index}>
                      <div
                        className={`message ${
                          message.sender == 'user' ? 'sended' : 'recieved'
                        }`}
                      >
                        <div className="content">
                          <p>{message.message}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div>{isTyping ? 'Anonymous is typing...' : ''}</div>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <div className="input_container">
                <div className="button-container">
                  <div className="emoji"></div>
                </div>

                <form
                  className="form_container"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <input
                    type="text"
                    placeholder="Nhắn tin..."
                    value={input}
                    onChange={(e) => handleChange(e)}
                  ></input>
                  <button className="submit">
                    <IoMdSend></IoMdSend>
                  </button>
                </form>
              </div>
              <div className="flex justify-end mt-3">
                <Button onClick={() => dialogRef.current.close()}>Đóng</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </dialog>
      <div className="fixed bottom-3 right-3 z-10">
        <Button
          className="rounded-full p-3"
          onClick={() => dialogRef.current.showModal()}
        >
          Chatbot
        </Button>
      </div>
    </div>
  );
}
