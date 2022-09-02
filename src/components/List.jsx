import React, { useState } from "react";
import {
  MdOutlineCheckCircleOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";

import "../App.css";
const List = ({ element, newItem, setNewItem, index }) => {
  const [line, setLine] = useState(false);

  const handleDone = () => {
    setLine(!line);
  };

  const handleDelete = (id) => {
    const updatedItems = newItem.filter((element, index) => {
      return index !== id;
    });
    setNewItem(updatedItems);
  };

  return (
    <>
      <div className="showItems">
        <div className="item">
          <MdOutlineCheckCircleOutline className="icon" onClick={handleDone} />
          <h3 style={{ textDecoration: line ? "line-through" : "none" }}>
            {element}
          </h3>
          <MdOutlineDeleteOutline
            className="icon"
            onClick={() => handleDelete(index)}
          />
        </div>
      </div>
    </>
  );
};

export default List;
