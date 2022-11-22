import React from "react";

const Input = (props) => {
  return (
    <input type="text"
      className="form-control mt-3"
      placeholder={props.placeholder}
    />
  );
};

export default Input;
