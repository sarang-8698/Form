/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "./App.css";
import User from "./Componenta/User";
const App = () => {
  // const [fullName, setFullName] = useState("Sarang");
  // const [email, setEmail] = useState("sarangchaudhari8699@gmail.com");
  // const [password, setPassword] = useState("123456789Aa@");
  // const [confirmPassword, setConfirmPassword] = useState("123456789Aa@");

  const [fromData, setFromData] = useState({
    fullName: "Sarang",
    email: "sarangchaudhari8699@gmail.com",
    password: "123456789Aa@",
    confirmPassword: "123456789Aa@",
  });

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleChnages = (e) => {
    const { name, value } = e.target; // destructuring
    setFromData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (fromData.password.length < 8) {
      setError("Password must be atleast 8 characters long");
      return;
    }
    if (fromData.password !== fromData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!/[!@#$%^&*()_\-+=,./?|]/.test(fromData.password)) {
      setError("Password must contain atleast one special character");
      return;
    }
    if (!/[A-Z]/.test(fromData.password)) {
      setError("Password must contain atleast one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(fromData.password)) {
      setError("Password must contain atleast one lowercase letter");
      return;
    }
    if (!/[0-9]/.test(fromData.password)) {
      setError("Password must contain atleast one digit");
      return;
    }

    setUsers((prev) => [
      ...prev,
      {
        fullName: fromData.fullName,
        email: fromData.email,
        password: fromData.password,
      },
    ]);

    setError("");
    setFromData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    

    // setFullName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");

    toast.success("Login Sucessful", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-96 shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create an Account
          </h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col gap-4"
          >
            <input
              className="w-full border-2 border-gray-300 px-4 py-2 text-lg rounded"
              type="text"
              placeholder="Enter Name Here"
              value={FormData.fullName}
              name="fullName"
              onChange={handleChnages}
              required
            />

            <input
              className="w-full border-2 border-gray-300 px-4 py-2 text-lg rounded"
              type="email"
              placeholder="Enter Your Email"
              value={fromData.email}
              name="email"
              onChange={handleChnages}
              required
            />
            <input
              className="w-full border-2 border-gray-300 px-4 py-2 text-lg rounded"
              type="password"
              placeholder="Enter Password"
              value={fromData.password}
              name="password"
              onChange={handleChnages}
              required
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <input
              className="w-full border-2 border-gray-300 px-4 py-2 text-lg rounded"
              type="password"
              placeholder="Confirm Password"
              value={fromData.confirmPassword}
              name="confirmPassword"
              onChange={handleChnages}
              required
            />

            <button className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-3">
              Submit
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            By registering, you agree to our{" "}
            <span className="text-blue-500 underline">Terms & Conditions</span>{" "}
            and <span className="text-blue-500 underline">Privacy Policy</span>.
          </p>
          <ToastContainer />
          {users.map((elem, i) => {
            return <User elem={elem} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
