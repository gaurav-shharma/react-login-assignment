import React from "react";
import { RiCloseFill } from "react-icons/ri";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center">
      <div className="rounded-lg shadow-lg w-full max-w-md">
        <div className="relative px-4 py-2">
          {children}
          <button
            className="absolute top-5 right-7 text-white bg-black rounded-full p-1"
            onClick={onClose}
          >
            <RiCloseFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
