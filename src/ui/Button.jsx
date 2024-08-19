import React from "react";

// Button Component

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-3 my-5 rounded-sm bg-[#ff3f6c] text-white cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
