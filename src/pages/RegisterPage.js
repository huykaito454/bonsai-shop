import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { API, config } from "../config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
const RegisterPage = () => {
  return (
    <div className="w-full page-container p-10 flex items-start justify-between">
      <div className="login-content w-[50%] flex flex-col">
        <p className=" text-gray-600 mb-5 font-semibold">REGISTER</p>
        <h1 className="text-6xl font-semibold w-[70%] mb-5">Create Account</h1>
        <div>
          <span>Do you already have an account?</span>
          <NavLink to={"/login"} className="ml-1 text-primary font-semibold">
            Login
          </NavLink>
        </div>
      </div>
      <RegisterForm></RegisterForm>
    </div>
  );
};
const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
    firstName: yup.string().required("Please enter firstName"),
    lastName: yup.string().required("Please enter lastName"),
    address: yup.string().required("Please enter address"),
    phone: yup.number().required("Please enter phone"),
    password: yup
      .string()
      .min(6, "Your password must be at least 6 characters")
      .required("Please enter your password"),
  })
  .required();
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const onSubmit = (values, e) => {
    e.preventDefault();
    handleRegister(values);
  };
  const handleRegister = async (data) => {
    const newData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      address: data.address,
      phone: data.phone,
    };
    console.log(newData);
    if (data.password !== data.passwordConfirm) {
      toast.error("Mật khẩu không trùng khớp", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const res = await axios.post(API.getAPI("register"), newData);

        toast.error(res.data.message, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/login");
      } catch (error) {
        toast.error(error.response.data.message, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <form
      className="login-form flex-1 shrink-0 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login-form-item mb-5 ">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          FIRST NAME
        </label>
        <br></br>
        <input
          type="text"
          id="firstName"
          {...register("firstName")}
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
        />
      </div>
      <div className="login-form-item mb-5 ">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          LAST NAME
        </label>
        <br></br>
        <input
          type="text"
          id="lastName"
          {...register("lastName")}
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
        />
      </div>
      <div className="login-form-item mb-5 ">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          EMAIL
        </label>
        <br></br>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
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
          {...register("password")}
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
        />
      </div>
      <div className="login-form-item mb-5">
        <label htmlFor="" className=" text-gray-500 text-sm mb-5 font-semibold">
          PASSWORD CONFIRM
        </label>
        <br></br>
        <input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm")}
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
        />
      </div>
      <div className="login-form-item mb-5">
        <label htmlFor="" className=" text-gray-500 text-sm mb-5 font-semibold">
          PHONE
        </label>
        <br></br>
        <input
          type="number"
          id="phone"
          {...register("phone")}
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
        />
      </div>
      <div className="login-form-item mb-5">
        <label htmlFor="" className=" text-gray-500 text-sm mb-5 font-semibold">
          ADDRESS
        </label>
        <br></br>
        <input
          type="text"
          id="address"
          {...register("address")}
          className="p-3 w-[80%] outline-none border focus:border-primary mt-2"
        />
      </div>
      <button type="submit" className={`button w-[80%] my-5`}>
        Create
      </button>
      <div className="w-[80%] text-sm">
        By creating an account, I agree to receive reward program communications
        at the email address provided. If you don't see your welcome Gift in
        your inbox, check your Promotions folder. Add hello@thesill.com as a
        contact to ensure emails get delivered right to your inbox. View our{" "}
        <NavLink to={"/"} className=" text-primary">
          Terms of Service
        </NavLink>{" "}
        and
        <NavLink to={"/"} className=" text-primary ml-1">
          Privacy Policy
        </NavLink>{" "}
        for details.
      </div>
    </form>
  );
};
export default RegisterPage;
