import { Label } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SingIn = () => {
  const Navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
   const loggedUser = JSON.parse(localStorage.getItem("user"));
   if(inputs.email === loggedUser.email && inputs.password === loggedUser.password)
   {

     Navigate("/home");

   }
   else{
    alert("Wrong email and password")
   }

  }

  return (
    <div className="">
      <form onSubmit={handleLogin} action="">

      <div className="text-center border rounded p-4 mt-5 w-50 h-100 m-auto">
        <h1 className="border-bottom w-25">Sing In </h1>
        <br />
        {/* <label className='' htmlFor="">Your email</label> */}
        <br />
        <input
          className="border-0 border-bottom w-100 p-2 m-2 "
          name="email"
          value={inputs.email}
          onChange={(e) =>
            setInputs({
              ...inputs,
              [e.target.name]: e.target.value,
              })
            }
            placeholder="Enter your email"
          type="email"

          />
        <br />
        <br />
        {/* <label className='' htmlFor="">Your password</label> */}
        <br />
        <br />
        <input
          className="border-0 border-bottom w-100 p-2 m-2 "
          name="password"
          value={inputs.password}
          onChange={(e) =>
              setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Enter your Password"
            type="password"
            />
        <br />
        <br />
        <button type="login">Sing in</button>
        <br />
        <br />
        <label>you have dont account </label>
        <Link to={"/SingUp"}>Register</Link>
      </div>
            </form>
    </div>
  );
};

export default SingIn;
