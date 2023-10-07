import React from "react";

export function ButtonCustom({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl ${className} text-white bg-redTheme hover:bg-redLightTheme transition-all`}
    >
      {children}
    </button>
  );
}
