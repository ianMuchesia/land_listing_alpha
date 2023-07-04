import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import {
  setCloseLoader,
  setFormLoader,
} from "@/redux/Features/loadSlice";
import { useRouter } from "next/router";
import { setIsAuthenticated } from "@/redux/Features/authSlice";
import Loader from "../Loader/Loader";

const SignUpForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formLoader = useAppSelector((state) => state.load.formLoader);

  const [signUpForm, setSignUpForm] = useState({
   firstName:"",
   secondName:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName,secondName, email, password, confirmPassword } = signUpForm;
    if (!firstName || !secondName|| !email || !password || !confirmPassword) {
      toast.warn("please fill all the inputs");
      return;
    }
    if (password !== confirmPassword) {
      toast.warn("passwords do not match");
      return;
    }
    dispatch(setFormLoader());
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/auth/register`,
        {
          name: firstName + " " + secondName,
          email,
          password,
        },
        { withCredentials: true, timeout: 5000 }
      );

      dispatch(setCloseLoader());
      toast.success("Sign Up successful!");

      setTimeout(() => {
        dispatch(setIsAuthenticated(data.user))
        router.push("/");
        setSignUpForm({
          firstName: "",
          secondName: "",
          email: "",
          password: "",
          confirmPassword: "",
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
    <ToastContainer/>
      <form className="form" onSubmit={handleSubmit}>
      {formLoader && <Loader />}
        <p className="form-title">Sign up to open your account</p>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={signUpForm.firstName}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter second name"
            name="secondName"
            value={signUpForm.secondName}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={signUpForm.email}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={signUpForm.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            id="confirmPassword"
            value={signUpForm.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button className="submit">Sign Up</button>

        <p className="signup-link">
          Have an account?
          <Link href="/Login">Sign in</Link>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
