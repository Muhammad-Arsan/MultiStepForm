import React from "react";
import  { ErrorsType, FormDataTypes } from './Form'
type PropsTypes = {
  formData:FormDataTypes,
  setFormData:React.Dispatch<React.SetStateAction<FormDataTypes>>
  errors:ErrorsType
   validateEmail:(event:React.ChangeEvent<HTMLInputElement>)=>void
   passwordNotMatch:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const First = ({
  formData,
  setFormData,
  errors,
  validateEmail,
  passwordNotMatch,
}:PropsTypes) => {
  return (
    <div>
      <form className="needs-validation">
        <div className="mb-3 w-50 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control "
            id="validationCustom01"
            aria-describedby="emailHelp"
            required
            value={formData.email}
            onChange={(e:any) => {
              setFormData({ ...formData, email: e.target.value });
              validateEmail(e.target.value);
            }}
          />
          <span style={{ color: "red" }}>{errors?.emailError}</span>
          {/* {console.log(errors?.emailError)} */}
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={formData.confirmPassword}
            onChange={(e:any) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
              passwordNotMatch(e.target.value);
            }}
          />
          {/* {console.log(errors)} */}
          <span style={{ color: "red" }}> {errors?.passwordError}</span>
        </div>
        <div className="">
          <span style={{ color: "red" }}>{errors?.notEmpty}</span>
        </div>
      </form>
    </div>
  );
};

export default First;
