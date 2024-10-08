import React, { useState } from "react";
import pic from "../assets/images/banners/off300.png";
import Input from "../ui/Input";
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import Button from "../ui/Button";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase/setup";
import { doc, setDoc } from "firebase/firestore";

import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // Set the User
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // login form visible or not
  const [login, setLogin] = useState(true);

  // store the value in redux
  const dispatch = useDispatch();

  // Handling the form
  function loginHandler() {
    setLogin(!login);
    setUser({ username: "", email: "", password: "" });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      if (!login) {
        // show the registraton Form
        await createUserWithEmailAndPassword(auth, user.email, user.password);
        const res = auth.currentUser;
        if (res) {
          await setDoc(doc(db, "users", res.uid), {
            username: user.username,
            email: res.email,
          });
        }
        toast.success(`User Registered Successfully`, {
          position: "top-center",
        });
        // if register redirect to login form
        setLogin(true);
      } else if (login) {
        // show the login form
        const res = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        toast.success(`User Login Successfully`, {
          position: "top-center",
        });
        dispatch(loginUser(res.user.email));
        // if login success redirect to Home Page
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="w-96 max-w-[384px] h-[80vh] shadow-md mt-10 mx-auto">
      <img src={pic} alt="300 Banner" />
      <div className="p-8">
        <p className="text-[#424553] font-semibold text-[18px] tracking-wide">
          {login ? "Login" : "Signup"} User
        </p>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-3 py-6 w-full ">
            {!login && (
              <Input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="User Name"
                className="w-full bg-[#f5f5f6] border-[1px] rounded-sm focus:bg-white"
                icon={<FaUser />}
                required
              />
            )}
            <Input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email Address"
              className="w-full bg-[#f5f5f6] border-[1px] rounded-sm focus:bg-white"
              icon={<FaEnvelope />}
              required
            />
            <Input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Your password"
              className="w-full bg-[#f5f5f6] border-[1px] rounded-sm focus:bg-white"
              icon={<FaKey />}
              required
            />
            <Button
              label={login ? "Login" : "Register"}
              type="submit"
              className="w-full"
            />
            <p className="text-[18px] -mt-4 text-center">
              {login ? "Don't have an account?" : "Already have an account?"}
              <span
                className="cursor-pointer pl-2 text-[#ff3f6c] font-semibold"
                onClick={loginHandler}
              >
                {login ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
