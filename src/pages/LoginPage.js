import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { API } from "../config";
import axios from "axios";
import { config } from "react-transition-group";
const LoginPage = () => {
  return (
    <div className="w-full page-container p-10 flex items-start justify-between">
      <div className="login-content w-[50%] flex flex-col">
        <p className=" text-gray-600 mb-5 font-semibold">ACCOUNT</p>
        <h1 className="text-6xl font-semibold w-[70%] mb-5">
          Log in to your account.
        </h1>
        <div>
          <span>Don’t have an account?</span>
          <NavLink to={"/register"} className="ml-1 text-primary font-semibold">
            Create one
          </NavLink>
        </div>
      </div>
      <FormLogin></FormLogin>
    </div>
  );
};

const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (values, e) => {
    e.preventDefault();
    handleLogin(values);
  };
  const handleLogin = async (data) => {
    try {
      const res = await axios.post(API.getAPI("login"), data);
      console.log(res?.data);
      localStorage.setItem("token", res?.data?.jwt);
      localStorage.setItem("role", JSON.stringify(res?.data?.data?.roles));
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <form
      action=""
      className="login-form flex-1 shrink-0 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login-form-item mb-5 ">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          EMAIL
        </label>
        <br></br>
        <input
          type="email"
          id="email"
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
          {...register("email")}
        />
      </div>
      <div className="login-form-item mb-5">
        <label htmlFor="" className=" text-gray-500 text-sm mb-5 font-semibold">
          PASSWORD
        </label>
        <br></br>
        <input
          type="password"
          id="password"
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
          {...register("password")}
        />
      </div>
      <p className=" text-primary font-semibold mb-5">Forgot your password?</p>
      <button className="button w-[80%]">Sign In</button>
    </form>
  );
};

export default LoginPage;
