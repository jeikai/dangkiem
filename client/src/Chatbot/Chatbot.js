import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import './Chatbot.scss';
import { IoMdSend } from 'react-icons/io';
import axios from 'axios';
import { getChatbotData } from '../utils/routes';
export default function Chatbot({ user }) {
  const [message_steps, setMessage] = useState({
    message_dubao: '',
    message_car: '',
    message_registerByMonth: '',
  });
  useEffect(() => {
    async function Data() {
      const data = await axios.get(`${getChatbotData}/${user.id}`);
      setMessage({
        message_dubao: '',

        message_car: data.data.car,
        message_registerByMonth: '',
      });
    }
    Data();
  }, [user]);
  const scrollRef = useRef();
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
    // await processMessageToChatGPT(newMessages);
    await solveData(newMessages);
  };
  function setResult(data_before, data) {
    setMessages([
      ...data_before,
      {
        message: data,
        sender: 'ChatGPT',
      },
    ]);
  }
  function Training(input, data_before, data) {
    let check = true;
    for (let i = 0; i < data.length - 1; i++) {
      if (input.includes(data[i])) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if (check) {
      return true;
    } else {
      return false;
    }
  }
  async function solveData(chatMessages) {
    let input = chatMessages[chatMessages.length - 1].message;
    let data_traing = [
      ['hi', 'Chào ngày mới tốt lành'],
      ['tên', 'gì', 'Tôi tên là Google, trợ lý của bạn'],
    ];
    let check = false;
    for (let i = 0; i < data_traing.length; i++) {
      for (let j = 0; j < data_traing[i].length; j++) {
        if (Training(input, chatMessages, data_traing[i])) {
          setResult(chatMessages, data_traing[i][data_traing[i].length - 1]);
          check = true;
          break;
        }
      }
    }
    if (!check) {
      setResult(chatMessages, "Xin lỗi do dữ liệu có giới hạn tôi chưa thể trả lời câu hỏi này");
    }
  }

  const labelProps = {
    variant: 'small',
    color: 'blue',
    className:
      'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-bold',
  };

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <div className="">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Typography
                          variant="h5"
                          color="Blue"
                          className="p-10 chat-header"
                        >
                          Trò chuyện với chatbot
                        </Typography>
                        <div className="chat-messages">
                          {messages.map((message, index) => {
                            return (
                              <div ref={scrollRef} key={index}>
                                <div
                                  className={`message ${
                                    message.sender == 'user'
                                      ? 'sended'
                                      : 'recieved'
                                  }`}
                                >
                                  <div className="content">
                                    <p>{message.message}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

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
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="fixed bottom-3 right-3 z-10">
        <Button className="rounded-full p-3" onClick={() => setOpen(true)}>
          Chatbot
        </Button>
      </div>
    </div>
  );
}
