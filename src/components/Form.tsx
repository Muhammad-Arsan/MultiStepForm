import React, { useState } from "react";
import First from "./First";
import Last from "./Last";
import Second from "./Second";
const validator  = require("validator");

export type FormDataTypes = {
     email?: string
     password?: string
     confirmPassword?: string
     firstName?: string
     lastName?: string
     occupation?: string
     address?: string
     age?: number
}
export type ErrorsType = {
emailError?:string
passwordError?:string
notEmpty?:string
addressError?:string
ageError?:string
addage?:string
}
const Form = () => {
  const [page, setPage] = useState<number>(0);
  const [formData, setFormData] = useState<FormDataTypes >({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    occupation: "",
    address: "",
    age:0

  });
  const [errors, setErrors] = useState<ErrorsType>({
       emailError:"",
       passwordError:"",
       notEmpty:"",
       addressError:"",
       ageError:"",
       addage:""

  });

  const validateEmail = (e:any) => {
    if (e.length < 3) {
      e.length < 3
        ? setErrors({ emailError: "charecters must be greater than 3" })
        : setErrors({ emailError: "" });
    } else {
      if (validator.isEmail(e)) {
        setErrors({ emailError: "" });
      } else {
        setErrors({ emailError: "Invalid Email" });
      }
    }
  };
  const passwordNotMatch = (e:any) => {
    if (formData.password != e) {
      setErrors({ passwordError: "Password Not match" });
    } else {
      setErrors({ passwordError: "" });
    }
  };
  const handlePassword = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setErrors({ notEmpty: "Fields must be Filled" });
    } else if (formData.password != formData.confirmPassword) {
      setErrors({ passwordError: "Password Not match" });
    } else {
      setPage((currPage) => currPage + 1);
    }
  };
  const addres = (e:any) => {
    if (e.length < 18) {
      // console.log(e);
      setErrors({ addressError: "address must be 18+ character " });
    } else if (e.length >= 18) {
      setErrors({ addressError: "" });
    }
    let num = parseInt(e);
    if (num < 18) {
      setErrors({ ageError: "age must be 18+" });
    } else if (num >= 18) {
      setErrors({ ageError: "" });
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
      setErrors({ notEmpty: "Fields must be Filled" });
    } else if (formData.address.length < 18 && formData.age < 18) {
      setErrors({
        addage: "address must be 18+ character and age must be 18+",
      });
    } else if (formData.address.length < 18) {
      setErrors({ addressError: "address must be 18+ character" });
    } else if (formData.age < 18) {
      setErrors({ ageError: "age must be 18+" });
    } else {
      setPage((currPage) => currPage + 1);
      console.log("address page", page);
    }

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
              href="https://github.com/Muhammad-Arsan/MultiStepForm/tree/type-script"
            >
              CodeLink
            </a>
          </div>
        </nav>
        <div>
          {page === 0 ? (
            <First
              formData={formData}
              setFormData ={setFormData}
              errors={errors}
          //     setErrors={setErrors}
              validateEmail={validateEmail}
              passwordNotMatch={passwordNotMatch}
            />
          ) : page === 1 ? (
            <Second
              formData={formData}
              setFormData={setFormData}
              errors={errors}
          //     setErrors={setErrors}
              addres={addres}
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
