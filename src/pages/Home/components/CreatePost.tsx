import React, { useState } from "react";

interface CreatePostProps {
  handleOnClick: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ handleOnClick }) => {
  const [content, setContent] = useState("");

  return (
    <div
      className="p-5 m-5 border border-gray-600 bg-zinc-800 text-white rounded-lg shadow-md mx-auto text-start flex flex-col cursor-pointer"
      onClick={handleOnClick}
    >
      <p className="mx-2 text-xl">Create Post</p>
      <div className="mt-4 flex items-center justify-center bg-zinc-900 rounded p-5 mx-2">
        <div className="w-10 h-10 rounded-full mr-5 p-2 flex items-center justify-center bg-zinc-800">
          💬
        </div>
        <input
          className="w-full p-2 rounded bg-transparent text-white placeholder-gray-500 cursor-pointer"
          placeholder="How are you feeling today?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="bg-blue-600 text-white mt-4 px-6 py-2 rounded hover:bg-blue-700 self-end mx-2"
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
