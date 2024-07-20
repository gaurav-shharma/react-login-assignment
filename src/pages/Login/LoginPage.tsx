import React, { useState } from "react";
import LoginCard from "./components/LoginCard";
import SignUpCard from "./components/SignUpCard";
import icon_logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  const navigateToHome = () => {
    navigate("home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img src={icon_logo} className="mb-10" alt="logo" />
      {showLogin ? (
        <LoginCard
          switchToSignup={() => setShowLogin(false)}
          onSubmit={navigateToHome}
        />
      ) : (
        <SignUpCard
          switchToLogin={() => setShowLogin(true)}
          onSubmit={navigateToHome}
        />
      )}
    </div>
  );
};

export default LoginPage;
