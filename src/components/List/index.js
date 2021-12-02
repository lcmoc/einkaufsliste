import React from "react";

const List = ({ listItems }) => {
    console.log('xxx');
  return (
    <ul>
      {listItems.map((item) => {
        <li>{item}</li>;
      })}
    </ul>
  );
};

export default List;
