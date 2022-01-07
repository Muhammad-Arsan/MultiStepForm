import React from "react";

const Last = ({ formData }) => {
  return (
    <div>
      <div className="mt-3">User Details</div>
      <div className="mt-4">
        <h6>
          FirstName :
          <span className="text-secondary fs-6 fw-light">
            {formData.firstName}
          </span>
        </h6>
        <h6>
          LastName :
          <span className="text-secondary fs-6 fw-light">
            {formData.lastName}
          </span>
        </h6>
        <h6>
          UserEmail :
          <span className="text-secondary fs-6 fw-light">{formData.email}</span>
        </h6>
        <h6>
          User Occupation :
          <span className="text-secondary fs-6 fw-light">
            {formData.occupation}
          </span>
        </h6>
        <h6>
          User Age :
          <span className="text-secondary fs-6 fw-light"> {formData.age}</span>
        </h6>
        <h6>
          User Address :
          <span className="text-secondary fs-6 fw-light">
            {formData.address}
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Last;
