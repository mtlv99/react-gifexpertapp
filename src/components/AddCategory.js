import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);

    if (inputValue.trim().length > 2) {
      setCategories((categoriesF) => [inputValue, ...categoriesF]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe algo..."
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
