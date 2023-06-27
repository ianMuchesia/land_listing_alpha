import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'


const SignUpForm = () => {



    const [ signUpForm , setSignUpForm] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
      })

      const handleChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSignUpForm(prevForm=>({
          ...prevForm,
          [event.target.name]:event.target.value
        }))
      }

      const handleSubmit =async(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const {name, email, password, confirmPassword} = signUpForm
        if(!name ||!email || !password ||!confirmPassword){
        
          return;
        }
        if (password !== confirmPassword) {
       
          return;
        }
        try {
          const {data} = await axios.post(`${process.env.baseURL}auth/registerUser`,{
            name,email, password
          })
          if(data.success){
           
    
            setSignUpForm({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
           
            });
          }
        } catch (error:any) {
          console.log(error);
          if (error.response.data.msg) {
         
            return;
          }
         
        }
        }


  return (
    <>  
    <form className="form" onSubmit={handleSubmit}>
    <p className="form-title">Sign up  to open your account</p>
    <div className="input-container">
       <input type="text" placeholder="Enter name"
       name='name'
        value={signUpForm.name}
        onChange={handleChange}
       />
       <span>
       </span>
   </div>
     <div className="input-container">
       <input type="email" placeholder="Enter email"
       name="email"
       value={signUpForm.email}
       onChange={handleChange}
       />
       <span>
       </span>
   </div>
   <div className="input-container">
       <input type="password" placeholder="Enter password"
      name="password" 
      value={signUpForm.password}
      onChange={handleChange}
      />
     </div>
     <div className="input-container">
       <input type="password" placeholder="Confirm password"
        name="confirmPassword" id="confirmPassword"
        value={signUpForm.confirmPassword}
        onChange={handleChange}
       />
     </div>
      <button className="submit">
     Sign Up
   </button>

   <p className="signup-link">
     Have an account?
     <Link href="/Login">Sign in</Link>
   </p>
</form>
</>
  )
}

export default SignUpForm