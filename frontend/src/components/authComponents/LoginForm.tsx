import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import {
  setCloseLoader,
  setFormLoader,
} from "@/redux/Features/loadSlice";
import { useRouter } from "next/router";
import { setIsAuthenticated } from "@/redux/Features/authSlice";

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
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true,  }
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
