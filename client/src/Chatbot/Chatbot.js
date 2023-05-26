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
        message_dubao: data.data.dubao,
        message_car: data.data.car,
        message_registerByMonth: data.data.registerByMonth,
      });
    }
    Data();
  }, [user]);
  let data_traing = [
    ['hi'],
    ['tên', 'gì'],
    ['tổng', 'đăng', 'ký'],
    ['đăng', 'kiểm', 'tháng', 'này'],
    ['dự', 'báo'],
    ['giá', 'cước', 'đăng kiểm'],
    ['thủ tục', 'đăng kiểm', 'xe nhập khẩu'],
    ['giấy tờ', 'cần', 'chuẩn bị', 'đăng kiểm'],
    ['hạn chế', 'khi', 'không đăng kiểm'],
    ['đăng', 'kiểm', 'nhanh'],
    ['thời', 'hạn', 'đăng', 'kiểm'],
    ['chuẩn', 'bị', 'giấy', 'tờ', 'đăng', 'kiểm'],
    ['kiểm', 'tra', 'yếu', 'tố', 'đăng', 'kiểm'],
    ['đăng', 'kiểm', 'xe', 'không', 'giấy', 'tờ', 'xe'],
    ['phạt', 'không', 'đăng', 'kiểm'],
    ['đăng', 'kiểm', 'xe', 'ở', 'đâu'],
    ['đặt', 'lịch', 'hẹn', 'đăng', 'kiểm'],
    ['kiểm', 'tra', 'trước', 'đăng', 'kiểm'],
    ['đăng', 'kiểm', 'mang', 'bảo', 'hiểm'],
    ['kiểm', 'định', 'chất', 'lượng', 'kỹ', 'thuật', 'trước', 'đăng', 'kiểm'],
    ['giấy', 'tờ', 'mất', 'đăng', 'kiểm', 'xe'],
    ['đăng', 'kiểm', 'vệ', 'sinh'],
    ['không', 'đủ', 'điều', 'kiện', 'kỹ', 'thuật', 'đăng', 'kiểm'],
    ['mua', 'bảo', 'hiểm', 'trước', 'đăng', 'kiểm'],
    ['đăng', 'kiểm', 'giấy', 'tờ', 'tùy', 'thân'],
  ];
  let data_answer = [
    'Chào bạn, chúc bạn ngày mới tốt lành. Tôi có thể giúp gì cho bạn?',
    'Tôi là Jeikai, liệu tôi có thể giúp gì cho bạn?',
    message_steps.message_car,
    message_steps.message_registerByMonth,
    message_steps.message_dubao,
    'Giá cước đăng kiểm xe phụ thuộc vào loại xe, địa phương và dịch vụ đăng kiểm.',
    'Đối với xe nhập khẩu, chủ xe cần cung cấp giấy tờ liên quan đến xuất xứ, chứng nhận chất lượng, kiểm tra kỹ thuật và tuân thủ quy định của cơ quan quản lý giao thông địa phương.',
    'Các giấy tờ cần chuẩn bị khi đăng kiểm xe bao gồm giấy đăng ký xe, giấy phép lái xe, giấy chứng nhận bảo hiểm, giấy tờ liên quan đến sở hữu, nhập khẩu và kiểm tra kỹ thuật xe.',
    'Khi không đăng kiểm xe, chủ xe sẽ bị hạn chế về việc sử dụng xe trên đường bộ và có thể bị xử phạt theo quy định của pháp luật giao thông.',
    'Để đăng kiểm xe nhanh chóng, chủ xe nên chuẩn bị đầy đủ giấy tờ, đảm bảo xe đạt điều kiện kỹ thuật, và nếu có thể, đặt lịch hẹn trước để tránh đợi lâu.',
    'Thời hạn đăng kiểm xe thường được quy định theo luật pháp và thường là 1 năm kể từ ngày đăng kiểm.',
    'Khi đi đăng kiểm xe, bạn cần chuẩn bị các giấy tờ cơ bản như giấy đăng ký xe, giấy phép lái xe, giấy chứng nhận bảo hiểm và giấy tờ liên quan đến kiểm tra kỹ thuật xe.',
    'Khi đăng kiểm xe, xe sẽ được kiểm tra các yếu tố như hệ thống phanh, hệ thống lái, hệ thống đèn chiếu sáng, hệ thống treo, hệ thống khung gầm, hệ thống khí thải và các thiết bị an toàn khác trên xe.',
    'Trong trường hợp không có giấy tờ xe, bạn nên liên hệ với cơ quan quản lý giao thông địa phương để được hướng dẫn về thủ tục và giấy tờ cần thiết để đăng kiểm xe.',
    'Khi xe không đăng kiểm, bạn có thể bị áp dụng các biện pháp xử phạt như tiền phạt, tước quyền sử dụng phương tiện giao thông, và có thể bị tịch thu biển số xe. Các khoản phí phạt sẽ được quy định theo quy định của pháp luật giao thông địa phương.',
    'Để đăng kiểm xe, bạn cần đến trung tâm đăng kiểm xe hoặc cơ quan quản lý giao thông địa phương được ủy quyền để thực hiện việc này.',
    'Việc đặt lịch hẹn trước khi đăng kiểm xe không bắt buộc, nhưng nó có thể giúp bạn tiết kiệm thời gian chờ đợi và đảm bảo được dịch vụ đăng kiểm trong thời gian mong muốn.',
    'Việc đặt lịch hẹn trước khi đăng kiểm xe không bắt buộc, nhưng nó có thể giúp bạn tiết kiệm thời gian chờ đợi và đảm bảo được dịch vụ đăng kiểm trong thời gian mong muốn.',
    'Khi đăng kiểm xe, bạn nên mang theo bảo hiểm ô tô, vì đối tượng tham gia giao thông phải có bảo hiểm ô tô theo quy định của pháp luật giao thông.',
    'Trước khi đăng kiểm xe, bạn nên thực hiện kiểm định chất lượng kỹ thuật để đảm bảo xe đáp ứng các tiêu chuẩn về an toàn, khí thải và môi trường được quy định.',
    'Nếu giấy tờ xe bị mất, bạn cần liên hệ với cơ quan quản lý giao thông địa phương để làm thủ tục tái cấp giấy tờ mới trước khi có thể đăng kiểm xe.',
    'Khi đăng kiểm xe, không yêu cầu việc chuẩn bị vệ sinh xe cụ thể. Tuy nhiên, việc giữ gìn sạch sẽ và bảo dưỡng định kỳ của xe sẽ giúp đảm bảo kết quả kiểm tra tốt hơn.',
    'Để đăng kiểm xe, xe cần đáp ứng các tiêu chuẩn kỹ thuật và an toàn quy định. Nếu xe không đủ điều kiện kỹ thuật, bạn cần thực hiện sửa chữa và bảo dưỡng xe để đạt được yêu cầu đăng kiểm.',
    'Việc mua bảo hiểm xe trước khi đăng kiểm không bắt buộc. Tuy nhiên, bảo hiểm xe là một phần quan trọng để bảo vệ tài sản và đảm bảo an toàn khi tham gia giao thông.',
    'Khi đi đăng kiểm xe, bạn cần mang theo giấy tờ tùy thuộc như giấy đăng ký xe, giấy phép lái xe, giấy chứng nhận bảo hiểm và các giấy tờ liên quan',
  ];
  const scrollRef = useRef();
  const [messages, setMessages] = useState([
    {
      message: 'Xin chào, tôi là trợ lý của bạn. Tôi có thể giúp gì cho bạn?',
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
    let check = false;
    for (let i = 0; i < data.length; i++) {
      if (input.includes(data[i])) {
        check = true;
      } else {
        return false;
      }
    }
    if (check) {
      return true;
    }
  }
  async function solveData(chatMessages) {
    let input = chatMessages[chatMessages.length - 1].message;
    input = input.toLowerCase();
    let check = false;
    for (let i = 0; i < data_traing.length; i++) {
      if (Training(input, chatMessages, data_traing[i])) {
        setResult(chatMessages, data_answer[i]);
        check = true;
      }
    }
    if (!check) {
      setResult(
        chatMessages,
        'Xin lỗi do dữ liệu có giới hạn tôi chưa thể trả lời câu hỏi này'
      );
    }
  }

    const [open, setOpen] = useState(false);

  return (
    <div className="">
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white">
                    <div className="flex flex-col px-4 w-full h-96">
                      <div className=" chat-header text-center sm:ml-4 sm:text-left">
                        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                          <div className="relative flex items-center space-x-4">
                            <div className="relative">
                              <span className="absolute text-green-500 right-0 bottom-0">
                                <svg width="20" height="20">
                                  <circle
                                    cx="8"
                                    cy="8"
                                    r="8"
                                    fill="currentColor"
                                  ></circle>
                                </svg>
                              </span>
                              <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt=""
                                className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                              />
                            </div>
                            <div className="flex flex-col leading-tight">
                              <div className="text-xl md:text-2xl mt-1 flex items-center">
                                <span className="text-gray-700 mr-3">
                                  Chatbot
                                </span>
                              </div>
                              <span className="text-base text-gray-600">
                                Hỗ trợ viên
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-messages grow flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                        {messages.map((message, index) => {
                          return (
                            <div ref={scrollRef} key={index}>
                              <div
                                className={`${
                                  message.sender == 'user'
                                    ? 'flex items-end justify-end'
                                    : 'flex items-end'
                                }`}
                              >
                                <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-2 order-2 items-start">
                                  <div>
                                    <span
                                      className={`${
                                        message.sender == 'user'
                                          ? 'px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white '
                                          : 'px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'
                                      }`}
                                    >
                                      {message.message}
                                    </span>
                                  </div>
                                </div>
                                {message.sender != 'user' && (
                                  <img
                                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile"
                                    className="w-6 h-6 rounded-full order-1"
                                  ></img>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-200 px-2 py-2 ">
                    <form
                      className="relative flex flex-row"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Nhập"
                        value={input}
                        onChange={(e) => handleChange(e)}
                        className="basis-3/4 w-full text-xs md:text-sm focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"
                      />
                      <div className="grow absolute right-0 items-center inset-y-0 flex">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6 text-gray-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="submit"
                          disabled={!input}
                          className="inline-flex items-center justify-center rounded-lg px-2 py-2  transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                        >
                          <span className="font-bold text-xs md:text-sm">
                            Gửi
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-6 w-6 ml-2 transform rotate-90"
                          >
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
        <Button className="rounded-full p-3" onClick={() => setOpen(true)}>
          Hỗ trợ
        </Button>
      </div>
    </div>
  );
}
