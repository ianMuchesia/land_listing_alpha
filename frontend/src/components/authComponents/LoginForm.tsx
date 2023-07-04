import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";
import { useAppDispatch, useAppSelector } from "@/pages/redux/Hooks";
import {
  setCloseLoader,
  setFormLoader,
} from "@/pages/redux/Features/loadSlice";
import { useRouter } from "next/router";
import { setIsAuthenticated } from "@/pages/redux/Features/authSlice";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formLoader = useAppSelector((state) => state.load.formLoader);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = loginForm;
    if (!email || !password) {
      toast.warn("please fill all the inputs");
      return;
    }
    dispatch(setFormLoader());
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true, timeout: 5000 }
      );
      dispatch(setCloseLoader());
      toast.success("Login successful!");

      setTimeout(() => {
        dispatch(setIsAuthenticated(data.user))
        router.push("/");
        setLoginForm({
          email: "",
          password: "",
        });
      }, 2000);
    } catch (error: any) {
      dispatch(setCloseLoader());
      console.log(error);
      console.log(error);
      if (error.code === "ECONNABORTED") {
        // handle timeout error
        toast.error("Request timed out. Please check your connection.");
        return;
      }
      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
  };
  return (
    <>
      <ToastContainer />

      <form className="form" onSubmit={handleSubmit}>
        {formLoader && <Loader />}
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="username@email.com"
            value={loginForm.email}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
            value={loginForm.password}
            onChange={handleChange}
          />
        </div>
        <button className="submit">Sign in</button>

        <p className="signup-link">
          No account?
          <Link href="/Signup">Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
