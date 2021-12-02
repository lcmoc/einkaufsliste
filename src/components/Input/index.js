import React, { useEffect, useState } from "react";

import List from "../List";
import trash from "../../assets/trash.png";
import add from "../../assets/icons8-add-48.png";

const Input = () => {
  const [fieldvalue, setFieldvalue] = useState();
  const [addValue, setAddValue] = useState([]);

  const handleChange = (event) => {
    setFieldvalue(event.target.value);
  };

  const handleAdd = () => {
    setFieldvalue("");
    setAddValue([...addValue, fieldvalue]);
  };

  const handleDelete = () => {};

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(addValue));
  }, [addValue]);

  return (
    <div className="flex items-start justify-start">
      <input type="text" className="mb-3 ml-5 w-52" onChange={(event) => handleChange(event)} value={fieldvalue} />
      <button className="w-6 h-6 bg-gray-300 ml-1" onClick={() => handleAdd()}>
        <img src={add} alt="add" />
      </button>
      <button onClick={() => handleDelete()}>
        <img src={trash} alt="trashcan" className="ml-20 w-6 h-6" />
      </button>
    </div>
  );
};

export default Input;
