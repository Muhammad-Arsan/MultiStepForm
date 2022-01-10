import React, { useState } from "react";
import First from "./First";
import Last from "./Last";
import Second from "./Second";

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
  const [errors, setErrors] = useState({});

  const handlePassword = () => {
    // let errors = {};
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      errors.notEmpty = "Fields must be Filled";
    } else if (formData.password != formData.confirmPassword) {
      errors.password = "Password Not match";
    } else {
      setPage((currPage) => currPage + 1);
      console.log("passowrd page:", page);
    }
    setErrors({ error: errors });
  };
  const addres = (e) => {
    if (e.length < 18) {
      // console.log(e);
      setErrors({ address: "address must be 18+ character " });
    } else if (e.length >= 18) {
      setErrors({ address: "" });
    }
    let num = parseInt(e);
    if (num < 18) {
      setErrors({ age: "age must be 18+" });
    } else if (num >= 18) {
      setErrors({ age: "" });
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
      errors.notEmpty = "Fields must be Filled";
    } else if (formData.address.length < 18 && formData.age < 18) {
      errors.addage = "address must be 18+ character and age must be 18+";
    } else if (formData.address.length < 18) {
      errors.address = "address must be 18+ character ";
    } else if (formData.age < 18) {
      errors.age = "age must be 18+";
    } else {
      setPage((currPage) => currPage + 1);
      console.log("address page", page);
    }
    setErrors({ error: errors });
    console.log("second", errors);
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
              Multi-Step
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
            <First
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          ) : page === 1 ? (
            <Second
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
              address={addres}
            />
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
