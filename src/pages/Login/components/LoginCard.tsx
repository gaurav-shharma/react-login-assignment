import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

interface LoginCardProps {
  switchToSignup: () => void;
  onSubmit: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({ switchToSignup, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
    onSubmit();
  };

  return (
    <div className="bg-zinc-800 p-9 border border-gray-500 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-lg text-gray-500 text-center">WELCOME BACK</h2>
      <h2 className="text-2xl font-bold mt-1 text-center text-white">
        Log into your account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-8">
          <label className="text-sm text-gray-300 text-start flex">
            Email or Username
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-700 rounded mt-2 bg-zinc-800 text-white placeholder-gray-500"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <label className="text-sm text-gray-300">Password</label>
            <a className="text-sm text-gray-300 hover:underline right-0">
              Forgot password?
            </a>
          </div>
          <input
            type={"password"}
            className="w-full p-2 border border-gray-700 rounded mt-2 bg-zinc-800 text-white placeholder-gray-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white mt-8 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Login now
        </button>
      </form>
      <div className="mt-2 flex justify-start items-baseline">
        <p className="text-gray-500 text-sm mr-2">Not registered yet?</p>
        <a
          className="text-gray-300 hover:underline mr-0.5"
          onClick={switchToSignup}
        >
          Register
        </a>
        <FiArrowRight className="text-gray-300 self-center" />
      </div>
    </div>
  );
};

export default LoginCard;
