import React from "react";

const Second = ({ formData, setFormData }) => {
  return (
    <div>
      <form>
        <div className="mb-3 w-50 ">
          <label for="exampleFirstName" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFirstName"
            aria-describedby="emailHelp"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div className="mb-3 w-50 ">
          <label for="exampleLastName" className="form-label">
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
          <label for="example Occupation" className="form-label">
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
          <label for="exampleAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleAddress"
            aria-describedby="emailHelp"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <div className="mb-3 w-50 ">
          <label for="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAge"
            aria-describedby="emailHelp"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Second;
