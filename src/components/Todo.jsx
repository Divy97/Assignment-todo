import React, { useState } from "react";

import { IoMdAddCircleOutline } from "react-icons/io";
import List from "./List";

import "../App.css";

const Todo = () => {
  const [items, setItems] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItems(event.target.value);
  };

  const handleClick = () => {
    setNewItem((prevValue) => {
      return [...prevValue, items];
    });

    setItems(" ");
  };

  const handleClear = () => {
    setItems("");
    setNewItem([]);
  };

  return (
    <>
      <div className="container">
        <div className="childDiv">
          <h1>Todo List</h1>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add a TODO..."
              onChange={itemEvent}
              value={items}
            />
            <IoMdAddCircleOutline className="icon plus" onClick={handleClick} />
          </div>

          {newItem.map((element, index) => {
            return (
              <>
                <List
                  element={element}
                  index={index}
                  newItem={newItem}
                  setNewItem={setNewItem}
                />
              </>
            );
          })}

          <div className="showItems">
            <button className="btn" onClick={handleClear}>
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
