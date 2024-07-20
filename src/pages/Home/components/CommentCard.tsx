import React from "react";
import { TfiComment } from "react-icons/tfi";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

interface CommentCardProps {
  userName: string;
  time: string;
  emoji: string;
  content: string;
  commentsCount: number;
  handleOnClick: () => void;
}

const CommentCard: React.FC<CommentCardProps> = ({
  userName,
  time,
  emoji,
  content,
  commentsCount,
  handleOnClick,
}) => {
  return (
    <div
      className="p-5 m-5 border border-gray-600 bg-zinc-800 text-white rounded-lg shadow-md mx-auto text-start cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="User avatar"
          />
          <div>
            <h2 className="text-lg font-semibold">{userName}</h2>
            <p className="text-sm text-gray-400">{time}</p>
          </div>
        </div>
        <PiDotsThreeOutlineFill />
      </div>

      <div className="mt-4 flex items-start justify-center bg-zinc-900 rounded p-5 mx-2">
        <div className="w-10 h-10 rounded-full mr-5 p-4 flex items-center justify-center bg-zinc-800">
          {emoji}
        </div>
        <p className="text-gray-400 text-sm">{content}</p>
      </div>
      <div className="mt-4 text-gray-400 flex items-center">
        <TfiComment />
        <p className="ml-2 text-sm">{commentsCount} comments</p>
      </div>
    </div>
  );
};

export default CommentCard;
