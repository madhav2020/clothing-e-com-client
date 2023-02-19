import React from "react";
import ChildComp from "../child-comp/ChildComp";

const ParentComp = () => {
  return (
    <>
      <div>
        <ChildComp name="hello" />
      </div>
    </>
  );
};

export default ParentComp;
