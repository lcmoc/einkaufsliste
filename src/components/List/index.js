import React, { useEffect, useState } from "react";

const List = () => {

  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("shoppingList");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const ShoppingList = () => {
    return (
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    );
  };

  return <ShoppingList />;
};

export default List;
