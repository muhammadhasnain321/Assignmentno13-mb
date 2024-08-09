import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SingUp = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    names: "",
    email: "",
    password: "",
  });
  const handleSubmite = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(inputs));
    navigate("/");
  };
  return (
    <div className="">
      <form onSubmit={handleSubmite} action="">
        <div className="text-center border rounded p-4 mt-5 w-50 h-100 m-auto">
          <h1 className="border-bottom w-25">Sing Up</h1>
          <br />

          <br />
          <input
            className="border-0 border-bottom w-100 p-2 m-2 "
            name="names"
            value={inputs.names}
            onChange={(e) =>
              setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Enter your name"
            type="name"
          />
          <br />
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
          <button type="submite">Sing up</button>
          <br />
          <br />
          <Link to={"/"}>you have already account</Link>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
