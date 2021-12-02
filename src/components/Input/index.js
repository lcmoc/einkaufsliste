import React, { useEffect, useState } from "react";

import List from "../List";
import trash from "../../assets/trash.png";

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
    const json = JSON.stringify(fieldvalue);
    localStorage.setItem("todos", json);
  }, [fieldvalue]);

  return (
    <div className="flex items-start justify-start">
      <input
        type="text"
        className="mb-3 ml-5 w-52"
        onChange={(event) => handleChange(event)}
        value={fieldvalue}
      />
      <button className="w-6 h-6 bg-gray-200 ml-1" onClick={() => handleAdd()}>
        +
      </button>
      <button onClick={() => handleDelete()}>
        <img src={trash} alt="trashcan" className="ml-20 w-6 h-6" />
      </button>
      <ul>
        {addValue.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      {/* <List listItems={addValue} /> */}
    </div>
  );
};

export default Input;
