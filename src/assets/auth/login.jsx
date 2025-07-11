import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Icon } from "@iconify/react";

const Login = () => {
  const navigate = useNavigate();
  const loguser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (loguser) {
      navigate("/home");
    }
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be at most 15 characters")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        const user = users.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/home");
        } else {
          alert("Invalid credentials");
        }
      } else {
        alert("No user in database");
      }
    },
  });
  return (
    <div className="bg-gradient-to-b from-[#d7d8dc] to-[#387DAD] h-screen flex items-center justify-center">
      <div className="flex justify-center">
        <div className=" border border-gray-400 p-4 bg-gradient-to-b from-[#d7d8dc] to-[#387DAD] shadow-2xl   flex items-center flex-col backdrop-blur-lg rounded-2xl">
          <div className="border bg-white p-2 rounded-xl mt-2">
            <Icon icon="fluent:arrow-exit-20-filled" width="30" height="30" />
          </div>
          <div className=" px-28 py-3 text-black text-4xl mt-4">
            <h2>Login</h2>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-5">
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={`px-4 py-3 w-96 rounded-2xl ${
                  formik.touched.email && formik.errors.email
                    ? "outline-red-500 outline"
                    : ""
                }`}
              />
            </div>
            <div className="mt-5 ">
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={`px-4 py-3 w-96 rounded-2xl ${
                  formik.touched.password && formik.errors.password
                    ? "outline-red-500 outline"
                    : ""
                }`}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div className=" flex justify-end w-96 mt-4">
              <p className="text-white">Forgot Password?</p>
            </div>
            <div className="flex justify-center ">
              <button
                className="hover:bg-gray-400 border text-white p-3 mt-3 w-96 rounded-2xl bg-[#387DAD]"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center mt-3 mb-3">
              <p className="text-white">Don't have an account?</p>
              <Link to="/register" className="text-white ml-2 font-medium">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
