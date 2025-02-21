import React, { useState } from "react";
import LoginCard from "../../Login/components/LoginCard";
import SignUpCard from "../../Login/components/SignUpCard";
import Modal from "../../../common-components/Modal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {showLogin ? (
        <LoginCard
          switchToSignup={() => setShowLogin(false)}
          onSubmit={onClose}
        />
      ) : (
        <SignUpCard
          switchToLogin={() => setShowLogin(true)}
          onSubmit={onClose}
        />
      )}
    </Modal>
  );
};

export default LoginModal;
