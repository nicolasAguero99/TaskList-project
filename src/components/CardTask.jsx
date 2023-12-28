// import React, { createContext, useContext, useState } from "react";
// import ReactDOM from "react-dom/client";

// import { InputTaskAdd, TaskContext, TitleContext, TitleTyped, SubtitleTyped } from "./InputTaskAdd";

// let CardTask = () => {
//   const newTask = useContext(TaskContext);
  
//   const title = useContext(TitleContext);

//   // let cont = 1;

//   // title == "done" ? cont++ : "";


//   return (
//     <>
//       <div style={{ backgroundColor: "blue" }}>
//         <h3>{title == "title" ? newTask : TitleTyped()}</h3>
//         <p>{title == "subtitle" ? newTask : SubtitleTyped()}</p>
//       </div>
//     </>
//   );
// };

// export default CardTask;


import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";

// Styles

import styles from "./styles/InputTaskAdd.css";




let CardTask = (props) => {
  
  let editMode = false;
  
    return (

       <div className="card-task" id={props.id}>
            <div>
              <div id={props.id} className={props.completed ? "task-complete completed" : "task-complete"} value={props.completed}
              
              onClick={() => props.completeTask(props.id)}
              //   onClick={(event) => {
              //     event.target.style.backgroundColor == false 
              //       ?
              //       (event.target.style.backgroundColor = "#2C5784",
              //       event.target.nextElementSibling.style.textDecoration = "line-through",
              //       event.target.nextElementSibling.style.color = "#9baacf")
              //       :
              //       (event.target.removeAttribute("style"), 
              //       event.target.nextElementSibling.removeAttribute("style"));
              //   }
              // }
              ></div>
              {
              !props.edit ?
                <h3 className={props.completed ? "title-completed" : null}>{props.title}</h3>
              : <input type="text" />
              }
            </div>
          <p>{props.subtitle}</p>
          <div className="options-task" tabIndex={0}
            onBlur={(event) => {
              // console.log(event.target.parentElement.lastElementChild.lastElementChild);
              // console.log(event.target.parentElement);
              console.log(event.relatedTarget);
              
              if (!event.relatedTarget) {
                // event.target.parentElement.lastElementChild.lastElementChild.style.display = 'none' ;
                document.querySelectorAll(".div-option-btn").forEach(divBtn => divBtn.style.display = 'none');
              }
            }}
          >
          <img src="/option-icon.svg" 
            onClick={(event) => {
              (event.target.parentElement.lastElementChild.style.display == 'flex' ? 
              event.target.parentElement.lastElementChild.style.display = 'none' :
              event.target.parentElement.lastElementChild.style.display = 'flex');
            }}
          />
            <div className="div-option-btn" style={{display: "none"}}>
              <button className="edit-btn" onClick={props.onClickEditBtn}> 
                {/* <?xml version="1.0" encoding="utf-8"?> */}
                <svg fill="#000000" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.8 2.2a2.51 2.51 0 0 0-3.54 0l-6.9 6.91-1.76 3.62a1.26 1.26 0 0 0 1.12 1.8 1.23 1.23 0 0 0 .55-.13l3.62-1.76 6-6 .83-.82.06-.06a2.52 2.52 0 0 0 .02-3.56zm-.89.89a1.25 1.25 0 0 1 0 1.77l-1.77-1.77a1.24 1.24 0 0 1 .86-.37 1.22 1.22 0 0 1 .91.37zM2.73 13.27 4.29 10 6 11.71zm4.16-2.4L5.13 9.11 10.26 4 12 5.74z"/></svg>
                Edit
              </button>
              <button className="delete-btn" onClick={props.onClickDeleteBtn}>
                {/* <?xml version="1.0" encoding="utf-8"?> */}
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z" fill="#000000"/>
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
    );
}


export default CardTask;