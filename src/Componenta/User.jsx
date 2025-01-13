/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const User = ({ elem }) => {
  return (
    <>
      <div className="bg-black text-white rounded-xl text-center justify-center">
        {elem.fullName}
      </div>
    </>
  );
};

export default User;
