import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client"; 
// import CardTask from "./CardTask";


// Styles

import styles from "./styles/InputTaskAdd.css";


const TaskContext = createContext();

const TitleContext = createContext();

let text = "";
let subtext = "";


// let TitleTyped = () => {
//   return text;
// };

// let SubtitleTyped = () => {
//   return subtext;
// };

let enableBtn = () => {
  document.querySelector("#input-title").value != "" ||
  document.querySelector("#input-subtitle").value != "" ?
    document.querySelector("#add-task").style.backgroundColor = "#2C5784"
  : document.querySelector("#add-task").removeAttribute("style");
};

let InputTaskAdd = () => {


    const [newTask, setNewTask] = useState("");

    const [title, setTitle] = useState(true);

    const [cont, setCont] = useState(0);

    const [completed, setCompleted] = useState(false);

    let changeState = (event) => {
      setNewTask(event.target.value);
    }

    let changeColor = (event) => {
      event.target.value != ""
      ? (document.querySelector("#icon").style.stroke = "#2C5784")
      : (document.querySelector("#icon").style.stroke = "#9baacf");
    }

    let add = (event) => {

      
      
    if (
      document.querySelector("#input-title").value != "" ||
      document.querySelector("#input-subtitle").value != "") {

      setCont(cont + 1);

      document.querySelector("main").innerHTML += `
          <div class="card-task">
            <div>
              <div class="task-complete" onclick='
              if(event.target.style.backgroundColor == false)
              {event.target.style.backgroundColor = "#2C5784";
              event.target.nextElementSibling.style.textDecoration = "line-through";
              event.target.nextElementSibling.style.color = "#9baacf";
              } else {
              event.target.removeAttribute("style");
              event.target.nextElementSibling.removeAttribute("style");
              }
              '></div>
              <h3>${document.querySelector("#input-title").value}</h3>
            </div>

          <p>${document.querySelector("#input-subtitle").value}</p>
          <div class="options-task">
          <img src="../src/assets/option-icon.svg"
          onclick="
          event.target.parentElement.lastElementChild.style.display == 'flex' ? 
          event.target.parentElement.lastElementChild.style.display = 'none' :
          event.target.parentElement.lastElementChild.style.display = 'flex'
          " />
            <div class="div-option-btn" style="display: none;">
              <button class="edit-btn">
                <?xml version="1.0" encoding="utf-8"?>
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.8 2.2a2.51 2.51 0 0 0-3.54 0l-6.9 6.91-1.76 3.62a1.26 1.26 0 0 0 1.12 1.8 1.23 1.23 0 0 0 .55-.13l3.62-1.76 6-6 .83-.82.06-.06a2.52 2.52 0 0 0 .02-3.56zm-.89.89a1.25 1.25 0 0 1 0 1.77l-1.77-1.77a1.24 1.24 0 0 1 .86-.37 1.22 1.22 0 0 1 .91.37zM2.73 13.27 4.29 10 6 11.71zm4.16-2.4L5.13 9.11 10.26 4 12 5.74z"/></svg>
                Edit
              </button>
              <button class="delete-btn">
                <?xml version="1.0" encoding="utf-8"?>
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z" fill="#000000"/>
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
        `;
      // : null;

      document.querySelector("#input-subtitle").value = "";
      document.querySelector("#input-title").value = "";

      console.log(document.querySelector("#input-subtitle").value);

      console.log(title);
    }
    }

    // document.querySelector(".task-complete") ?
    // document.querySelector(".task-complete").addEventListener("click", () => {
    //   setCompleted(!completed);
    //   console.log(completed);
    //     completed ?
    //     document.querySelector(".task-complete").style.backgroundColor = "#2C5784" :
    //     document.querySelector(".task-complete").removeAttribute("style");
    // }) : null;

    // if (document.querySelector("#inputAddTask").value != "" ) {
    //   alert("gsaafa");
    // }

    return (
      <>
        <TaskContext.Provider value={newTask}>
          <TitleContext.Provider value={title}>
            <header>
              <h1>Task List</h1>
              <span>
                {new Date().getDate().toString()}/0
                {(new Date().getMonth() + 1).toString()}/
                {new Date().getFullYear().toString()}
              </span>
              <div className="div-input">
                <div>
                  <input
                    id="input-title"
                    required="required"
                    type="text"
                    className="div-input__input"
                    onChange={(event) => {
                      enableBtn();
                      // changeState(event);
                      // changeColor(event);
                    }}
                    // onKeyDown={(event) => {
                      //   add(event);
                    // }}
                    // onFocus={(event) => {
                      //   event.target.setAttribute("placeholder", "Type the title");
                    // }}
                  />
                  <label htmlFor="input-title">Type the title</label>
                </div>

                <div>
                  <input
                    id="input-subtitle"
                    required="required"
                    type="text"
                    className="div-input__input"
                    onChange={(event) => {
                      enableBtn();
                    }}
                    // onKeyDown={(event) => {
                    //   add(event);
                    // }}
                    // onFocus={(event) => {
                    //   event.target.setAttribute("placeholder", "Type the title");
                    // }}
                  />
                <label htmlFor="input-subtitle">Type the subtitle</label>
                </div>

                <button
                  id="add-task"
                  onKeyDown={(event) => {
                    add(event);
                  }}
                  onClick={(event) => {
                    add(event);
                  }}
                >
                  Add task
                  {/* <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="icon"
                      d="M10.5004 11.9998H5.00043M4.91577 12.2913L2.58085 19.266C2.39742 19.8139 2.3057 20.0879 2.37152 20.2566C2.42868 20.4031 2.55144 20.5142 2.70292 20.5565C2.87736 20.6052 3.14083 20.4866 3.66776 20.2495L20.3792 12.7293C20.8936 12.4979 21.1507 12.3822 21.2302 12.2214C21.2993 12.0817 21.2993 11.9179 21.2302 11.7782C21.1507 11.6174 20.8936 11.5017 20.3792 11.2703L3.66193 3.74751C3.13659 3.51111 2.87392 3.39291 2.69966 3.4414C2.54832 3.48351 2.42556 3.59429 2.36821 3.74054C2.30216 3.90893 2.3929 4.18231 2.57437 4.72906L4.91642 11.7853C4.94759 11.8792 4.96317 11.9262 4.96933 11.9742C4.97479 12.0168 4.97473 12.0599 4.96916 12.1025C4.96289 12.1506 4.94718 12.1975 4.91577 12.2913Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </button>
              </div>
              {/* {document.querySelector("#inputAddTask") ? 
                document.querySelector("#inputAddTask").value != "" ? alert("gsaafa") : null
                : null
              } */}
              {/* <button onClick={() => add()}>+</button> */}
            </header>

            <main>{/* <CardTask/> */}</main>
          </TitleContext.Provider>
        </TaskContext.Provider>
      </>
    );
};


export { InputTaskAdd, TaskContext, TitleContext };