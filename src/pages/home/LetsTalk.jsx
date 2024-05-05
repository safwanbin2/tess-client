import { FaTelegramPlane } from "react-icons/fa";

const LetsTalk = () => {
  return (
    <div className="md:w-11/12 mx-auto py-10  flex justify-center items-center bg-black bg-opacity-70">
      <a
        href="https://t.me/tessinsightsbot"
        target="_blank"
        className="w-11/12 mx-auto text-white flex flex-col md:flex-row justify-between items-start md:items-center hover:text-blue-500 transition-all duration-300"
      >
        <h1 className="text-4xl md:text-8xl leading-[2.5rem] md:leading-[7rem]">
          let's talk
        </h1>
        <div className="flex justify-end items-center gap-4">
          <div className="text-start md:text-end">
            <h3 className="text-lg">We are much closer</h3>
            <p className="text-xs text-gray-500">Chat with our Telegram Bot</p>
          </div>
          <div className="bg-gray-600 p-3 rounded-full">
            <FaTelegramPlane className="text-xl" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default LetsTalk;
