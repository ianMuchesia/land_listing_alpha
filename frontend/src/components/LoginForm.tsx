import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {

  
 
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
   

    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true, timeout: 5000 }
      );
      console.log(data);
     


        setTimeout(() => {}, 2000);
      
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <>
     
      <form className="form" onSubmit={handleSubmit}>
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
          <input type="password"
          placeholder="password"
              name="password"
              id="password"
              value={loginForm.password}
              onChange={handleChange} />
        </div>
        <button  className="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account?
          <Link href="/Signup">Sign up</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
