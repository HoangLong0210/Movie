import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "./Firebase-config";

const FirebaseAuth = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [userInfo, setUserInfo] = useState("");

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const user = await createUserWithEmailAndPassword(
      auth,
      values.username,
      values.password
    );
    console.log(user);
  };

  return (
    <div className="w-full max-w-[500px] mx-auto bg-[#202451] shadow-lg p-5 mb-10 mt-20">
      <form onSubmit={handleCreateUser}>
        <h1 className="flex justify-center mb-2 text-3xl text-white">
          ĐĂNG KÝ
        </h1>
        <input
          type="text"
          className="w-full p-3 mb-5 text-black border border-gray-200 rounded outline-none focus:border-blue-600"
          placeholder="Enter your username"
          name="username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="w-full p-3 mb-5 text-black border border-gray-200 rounded outline-none focus:border-blue-600"
          placeholder="Enter your password"
          name="password"
          onChange={handleInputChange}
        />
        <button
          className="w-full p-3 text-lg font-medium bg-blue-600 rounded-lg hover:bg-primary"
          type="submit"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default FirebaseAuth;
