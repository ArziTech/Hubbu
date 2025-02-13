import React from "react";

interface SelectProps {
  name: string;
  value:string;
  type: "CATEGORY" | "RATING";
}

const Select = ({name}: SelectProps) => {
  // onclick
  // add to params the category or rating and its value
  return (
    // need to check if it is active
    // if its acive highlight it
    <p className={'ms-4'}>{name}</p>
  );
};
export default Select;
