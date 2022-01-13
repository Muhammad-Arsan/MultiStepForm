import React from "react";
import { ErrorsType, FormDataTypes } from "./Form";
type PropsTypes ={
formData : FormDataTypes
errors:ErrorsType
addres:any
setFormData:React.Dispatch<React.SetStateAction<FormDataTypes>>
}


const Second = ({ formData, setFormData, errors, addres }:PropsTypes) => {
  console.log(errors);
  return (
    <div>
      <form>
        <div className="mb-3 w-50 ">
          <label htmlFor="exampleFirstName" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFirstName"
            aria-describedby="emailHelp"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
        </div>
        <div className="mb-3 w-50 ">
          <label htmlFor="exampleLastName" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleLastName"
            aria-describedby="emailHelp"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
        <div className="mb-3 w-50 ">
          <label htmlFor="example Occupation" className="form-label">
            Occupation
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleOccupation"
            aria-describedby="emailHelp"
            value={formData.occupation}
            onChange={(e) =>
              setFormData({ ...formData, occupation: e.target.value })
            }
          />
        </div>
        <div className="mb-3 w-50 ">
          <label htmlFor="exampleAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleAddress"
            aria-describedby="emailHelp"
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
              addres(formData.address);
            }}
          />
          <span style={{ color: "red" }}>{errors?.addressError}</span>
        </div>
        <div className="mb-3 w-50 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAge"
            aria-describedby="emailHelp"
            value={formData.age}
            onChange={(e:any) => {
              setFormData({ ...formData, age: e.target.value });
              addres(e.target.value);
            }}
          />
          <span style={{ color: "red" }}> {errors?.ageError}</span>
        </div>
        <div style={{ color: "red" }}>{errors?.addage}</div>
        <div style={{ color: "red" }}>{errors?.notEmpty}</div>
      </form>
    </div>
  );
};

export default Second;
