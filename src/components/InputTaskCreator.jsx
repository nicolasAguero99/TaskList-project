import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";

// Styles

import styles from "./styles/InputTaskAdd.css";

// import { v4 as uuidv4 } from 'uuid';

function InputTaskCreator(props) {
  // let cont = 0;

  const [id, setId] = useState(0);

  const [inputTitle, setInputTitle] = useState("");

  const [inputSubtitle, setInputSubtitle] = useState("");

  const getInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const getInputSubtitle = (e) => {
    setInputSubtitle(e.target.value);
  };
  
  let enableBtn = () => {
    document.querySelector("#input-title").value != "" ||
    document.querySelector("#input-subtitle").value != ""
    ? (document.querySelector("#add-task").style.backgroundColor = "#2C5784")
    : document.querySelector("#add-task").removeAttribute("style");
  };
  
  const submitForm = (e) => {
    e.preventDefault();

    setId(id + 1);

    const newTask = {
      id: id,
      title: inputTitle,
      subtitle: inputSubtitle,
      completed: false,
    };

    // console.log("title: " + inputTitle);
    // console.log("subtitle: " + inputSubtitle);

    // console.log(newTask);

    props.onSubmit(newTask);
  };

  return (
    <header>
      <h1>Hi, Nicolas</h1>
      <span>
        {new Date().getDate().toString()}/0
        {(new Date().getMonth() + 1).toString()}/
        {new Date().getFullYear().toString()}
      </span>
      <form onSubmit={submitForm}>
        <div className="div-input">
          <div>
            <input
              id="input-title"
              type="text"
              className="div-input__input not-required"
              autoComplete="off"
              onChange={(e) => {
                getInputTitle(e);
                enableBtn();
                e.target.value
                  ? document.querySelector("#input-title").setAttribute("class", "div-input__input")
                  : document.querySelector("#input-title").setAttribute("class", "div-input__input not-required");
              }}
            />
            <label htmlFor="input-title">Type the title</label>
          </div>

          <div>
            <input
              id="input-subtitle"
              type="text"
              className="div-input__input not-required"
              autoComplete="off"
              onChange={(e) => {
                getInputSubtitle(e);
                enableBtn();
                e.target.value
                ? document.querySelector("#input-subtitle").setAttribute("class", "div-input__input")
                : document.querySelector("#input-subtitle").setAttribute("class", "div-input__input not-required");
              }}
            />
            <label htmlFor="input-subtitle">Type the subtitle</label>
          </div>

          <button id="add-task">Add task</button>
        </div>
      </form>
    </header>
  );
}

export default InputTaskCreator;
