import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Icon } from "@iconify/react";

const Register = () => {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be at most 15 characters")
      .required("Required"),
    isChecked: Yup.boolean().oneOf(
      [true],
      "Please agree to terms and conditions"
    ),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      isChecked: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(values);
      localStorage.setItem("users", JSON.stringify(users));
    },
  });
  return (
    <div className=" h-screen  bg-gradient-to-b from-[#d7d8dc] to-[#262626] p-4 flex  ">
      <div className="w-1/2 h-full flex-1 relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="ear.webp"
          alt="profile"
        />
        <div className="absolute top-0 left-0 flex justify-between flex-col h-full w-full">
          <div className="mt-4 flex justify-end mr-4">
            <Link
              to={"/"}
              className="bg-[#0a0a0a] text-white py-2 px-6 rounded-full mt-4
              flex items-center gap-2"
            >
              Back to website
              <Icon icon="ri:arrow-right-line" />
            </Link>
          </div>

          <div className="mb-20 text-white">
            <h1 className=" text-center text-5xl mb-3 font-normal">
              Capturing Moments,
            </h1>
            <h1 className=" text-center text-5xl  font-normal">
              Creating Memories
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full  flex-1 pt-16  ">
        <div>
          <h1 className="text-6xl text-medium text-center pb-8 ">
            Create an Account
          </h1>
          <p className="text-gray-600 text-center text-md mb-8">
            Already have an Account?
            <Link to="/login" className="text-[#0a0a0a] font-medium">
              Log in
            </Link>
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-2 gap-4 max-w-xl pl-36"
        >
          <div>
            <input
              name="firstname"
              className="bg-white p-2 w-full rounded-lg"
              type="text"
              placeholder="First Name"
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <span className="text-red-500 text-xs">Please enter name</span>
            ) : null}
          </div>
          <div>
            <input
              name="lastname"
              className="bg-white p-2 w-full rounded-lg"
              type="text"
              placeholder="Last Name"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <span className="text-red-500 text-xs">Please enter name</span>
            ) : null}
          </div>
          <div className="col-span-2">
            <input
              name="email"
              className=" p-2 rounded-lg w-full bg-white"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-xs">
                {formik.errors.email}
                Please enter a valid email
              </span>
            ) : null}
          </div>
          <div className="mb- col-span-2">
            <input
              name="password"
              className=" p-2  rounded-lg w-full bg-white"
              type="password"
              placeholder=" Enter your Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="text-red-500 text-xs">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
          <div className="text-start col-span-2 w-full  ">
            <label className="">
              <input
                type="checkbox"
                name="isChecked"
                className="w-5 h-4 "
                onChange={formik.handleChange}
              />
              {formik.touched.isChecked && formik.errors.isChecked ? (
                <span className="text-red-500 text-xs">
                  {formik.errors.isChecked}
                </span>
              ) : (
                <span className="col-span-2 text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-[#0a0a0a]">
                    terms and conditions
                  </a>
                </span>
              )}
            </label>
          </div>
          <button
            className="w-full active:scale-95 hover:bg-[#9087c0] transition-all bg-[#0a0a0a] text-white py-2 rounded-lg col-span-2  mt-6"
            type="submit"
          >
            Create Account
          </button>
          <div className="flex items-center mt-4 col-span-2">
            <hr className="flex-grow border-t border-white " />
            <span className="mx-4 text-white font-medium">
              or Register with
            </span>
            <hr className="flex-grow border-t border-white" />
          </div>
          <div className="flex flex-col items-center mr-2">
            <button
              className="w-full flex items-center justify-center border hover:bg-gray-600 bg-[#0a0a0a] border-gray-400 text-white py-2 rounded-lg mt-4"
              type="submit"
            >
              <Icon
                icon="flat-color-icons:google"
                width="24"
                className="mr-2"
              />
              <span>Google</span>
            </button>
          </div>

          <div className="flex flex-col items-center ml-2">
            <button
              className="w-full flex items-center justify-center border bg-[#0a0a0a] hover:bg-gray-600 border-gray-400 text-white py-2 rounded-lg mt-4"
              type="submit"
            >
              <Icon icon="hugeicons:apple" width="24" className="mr-2" />
              <span>Apple</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
