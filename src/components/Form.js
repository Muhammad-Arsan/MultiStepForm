import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import First from "./First";
import Last from "./Last";
import Second from "./Second";
// import { Link } from "react-router-dom";
const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    occupation: "",
    address: "",
    age: "",
  });

  const handlePassword = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      alert("field must be filled");
    } else if (formData.password != formData.confirmPassword) {
      alert("Password Not match");
    } else {
      setPage((currPage) => currPage + 1);
      //  console.log("passowrd page:", page);
    }
  };
  const handleAddAge = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.age ||
      !formData.occupation
    ) {
      alert("field must be filled");
    } else if (formData.address.length < 18 && formData.age < 18) {
      alert("address must be 18+ character and age must be 18+");
    } else if (formData.address.length < 18) {
      alert("address must be 18+ character");
    } else if (formData.age < 18) {
      alert("age must be 18+");
    } else {
      setPage((currPage) => currPage + 1);
      console.log("address page", page);
    }
  };
  const submitHanlder = () => {
    alert("submit Successfully");
  };

  return (
    <div className="">
      <div>
        <nav className="navbar navbar-expand-lg  bg-primary mb-5">
          <div className="container-fluid d-flex justify-content-center ">
            <a className="navbar-brand text-white " href="">
              Multi-Step-Form
            </a>
          </div>

          <div className="container-fluid d-flex justify-content-center ">
            <a
              className="text-white "
              href="https://github.com/Muhammad-Arsan/MultiStepForm/tree/main"
            >
              CodeLink
            </a>
          </div>
        </nav>
        <div>
          {page === 0 ? (
            <First formData={formData} setFormData={setFormData} />
          ) : page === 1 ? (
            <Second formData={formData} setFormData={setFormData} />
          ) : (
            <Last formData={formData} />
          )}
        </div>
      </div>
      <div className="m-5 ">
        <button
          onClick={
            page == 0
              ? handlePassword
              : page == 1
              ? handleAddAge
              : submitHanlder
          }
          className="btn btn-primary mr-3"
        >
          {page == 2 ? "Submit" : "Continue"}
        </button>
        <button
          onClick={() => setPage((currPage) => currPage - 1)}
          disabled={page == 0}
          className="btn btn-primary ml-3"
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Form;
