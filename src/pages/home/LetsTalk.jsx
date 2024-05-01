import { FaTelegramPlane } from "react-icons/fa";

const LetsTalk = () => {
  return (
    <div className="py-20 w-full flex justify-center items-center bg-black bg-opacity-70">
      <div className="w-11/12 mx-auto text-white flex justify-between items-center">
        <h1 className="text-white text-8xl leading-[7rem]">let's talk</h1>
        <div className="flex justify-end items-center gap-4">
          <div className="text-end">
            <h3 className="text-lg">We are much closer</h3>
            <p className="text-xs text-gray-500">Chat with our Telegram Bot</p>
          </div>
          <a
            href="https://t.me/tessinsightsbot"
            target="_blank"
            className="bg-gray-600 hover:bg-blue-500 p-4 transition-all duration-300 rounded-full"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
