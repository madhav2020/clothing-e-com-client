import React from "react";

const ChildComp = ({ name, email, phone, address }) => {
  return (
    <>
      <div>{name}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{address}</div>
    </>
  );
};

export default ChildComp;
