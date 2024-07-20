import React, { useState } from "react";
import CommentCard from "./components/CommentCard";
import { DATA } from "../../data/data";
import CreatePost from "./components/CreatePost";
import LoginModal from "./components/LoginModal";

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showLoginModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <LoginModal isOpen={isOpen} onClose={onClose} />
      <div className="w-10/12 md:w-6/12 mx-auto text-start">
        <div className="text-white py-5 mt-10">
          <p className="text-3xl">Hello Jane</p>
          <p className="mt-4 text-gray-500">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <CreatePost handleOnClick={showLoginModal} />
        {DATA.map((post) => (
          <CommentCard
            key={post.id}
            userName={post.userName}
            time={post.time}
            emoji={post.emoji}
            content={post.content}
            commentsCount={post.commentsCount}
            handleOnClick={showLoginModal}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
