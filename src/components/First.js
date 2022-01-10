import React from "react";

const First = ({ formData, setFormData, errors, setErrors }) => {
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
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
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          {errors?.error?.password}
        </div>
        <div className="">
          <span style={{ color: "red" }}>{errors?.error?.notEmpty}</span>
        </div>
      </form>
    </div>
  );
};

export default First;
