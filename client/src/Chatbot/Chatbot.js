import React, { Fragment, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import {
    Card,
    Typography,
    Button,
    CardBody,
    CardFooter,
} from '@material-tailwind/react';
import './Chatbot.scss'
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

    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)


    return (
        <div className=''>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50 " onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-end p-4 text-center sm:p-0 h-12">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" >

                                    <div className="bg-white">
                                        <div className="flex flex-col px-4 w-full h-96">
                                            <div className=" chat-header text-center sm:ml-4 sm:text-left">
                                                <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                                                    <div className="relative flex items-center space-x-4">
                                                        <div className="relative">
                                                            <span className="absolute text-green-500 right-0 bottom-0">
                                                                <svg width="20" height="20">
                                                                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                                                                </svg>
                                                            </span>
                                                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
                                                        </div>
                                                        <div className="flex flex-col leading-tight">
                                                            <div className="text-xl md:text-2xl mt-1 flex items-center">
                                                                <span className="text-gray-700 mr-3">Chatbot</span>
                                                            </div>
                                                            <span className="text-base text-gray-600">Hỗ trợ viên</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="chat-messages grow flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                                {messages.map((message, index) => {
                                                    return (
                                                        <div ref={scrollRef} key={index}>
                                                            <div
                                                                className={`${message.sender == 'user' ? 'flex items-end justify-end' : 'flex items-end'
                                                                    }`}
                                                            >
                                                                <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-2 order-2 items-start">
                                                                    <div><span className={`${message.sender == 'user' ? "px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " : 'px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'}`}>{message.message}</span></div>
                                                                </div>
                                                                {message.sender != 'user' && <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-1"></img>
                                                                }

                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                                <div className='text-xs md:text-sm'>{isTyping ? 'Đang gõ...' : ''}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t-2 border-gray-200 px-2 py-2 ">
                                        <form
                                            className="relative flex flex-row"
                                            onSubmit={(e) => {
                                                handleSubmit(e);
                                            }}>
                                            <input type="text"
                                                placeholder="Nhập"
                                                value={input}
                                                onChange={(e) => handleChange(e)}
                                                className="basis-3/4 w-full text-xs md:text-sm focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3" />
                                            <div className="grow absolute right-0 items-center inset-y-0 flex">
                                                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </button>
                                                <button type="submit" disabled={!input} className="inline-flex items-center justify-center rounded-lg px-2 py-2  transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                                    <span className="font-bold text-xs md:text-sm">Gửi</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className="fixed bottom-3 right-3 z-10">
                <Button
                    className="rounded-full p-3"
                    onClick={() => setOpen(true)}
                >
                    Hỗ trợ
                </Button>
            </div>
        </div>
    );
}
