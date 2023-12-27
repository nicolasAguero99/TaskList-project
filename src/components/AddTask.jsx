import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";

//Components
import CardTask from "./CardTask";
import InputTaskCreator from "./InputTaskCreator";

//Libraries
import { v4 as uuidv4 } from 'uuid';
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();


  // let cont = 20;
  
  const AddTask = () => {

    const [tasks, setTasks] = useState([]);

    const [completedTasks, setCompletedTasks] = useState([]);

    const [title, setTitle] = useState("");
    
    const [subtitle, setSubtitle] = useState("");

    const [firstTime, setFirstTime] = useState(true);

    const [bool, setBool] = useState(false);

    let randNum = Math.floor(Math.random() * 7);;

    const rememberTextList = [
      "to take out the garbage",
      "to do your homework",
      "to say happy birthday",
      "to say happy day",
      "to do your exercises",
      "to do your routine",
      "to do the shopping",
    ];

    // console.log("TASKS cantt: " + tasks.length);

    useEffect(() => {
      firstTime == false ?
        tasks.length < 1 ? (setCompletedTasks([]),
        jsConfetti.addConfetti({emojis:['✅'], emojiSize: 30, confettiNumber: 10,}),
        jsConfetti.addConfetti({confettiColors: ['#2C5784', '#9baacf']})): null
      : null
      setFirstTime(false)
    }, [tasks])



    const completeTask = (id) => {
      const updateTaskList = tasks.map((task) => {
        if (task.id == id) {
          task.completed = !task.completed;
        }
        return task;
      });
      
      completedTasks.map((task) => {
        if (task.id == id) {
          task.completed = !task.completed;
          if (task.completed == false) {
            console.log("sacar");

            const taskCompletedFilterDelete = completedTasks.filter(
              (task) => task.completed !== true
            );

            const taskCompletedFilterReturn = completedTasks.filter(
              (task) => task.completed === true
            );

            setCompletedTasks(taskCompletedFilterReturn);
            // setTasks(taskCompletedFilterDelete);
            
            taskCompletedFilterDelete.map(task => 
              tasks.unshift(task)
            )

            console.log("filtrada a eliminar: " + JSON.stringify(taskCompletedFilterDelete));
            
          }
        }

        // console.log("TASKS cantt: " + tasks.length);

        return task;
      });

      
      const taskCompletedFilter = tasks.filter((task) => task.completed !== true);

      const addTaskCompletedFilter = tasks.filter((task) => task.completed === true);

      setTasks(taskCompletedFilter);

      console.log("filtrada " + JSON.stringify(addTaskCompletedFilter));

      // const updateCompleteTaskList = [addTaskCompletedFilter, ...completedTasks];

      // updateCompleteTaskList.map((taskComp) => {
        //   console.log("taskComp: " + JSON.stringify(taskComp));
        //   setCompletedTasks(taskComp);
        // });
        
      addTaskCompletedFilter.map((taskCompletedFilter) => {
        completedTasks.push(taskCompletedFilter);
      });

      // setCompletedTasks(updateCompleteTaskList);

      console.log(completedTasks);

      // console.log("updateCompleteTaskList " + JSON.stringify(updateCompleteTaskList));
    };

    let addTask = task => {
      if (task.title.trim()) {
        task.title = task.title.trim();
        task.subtitle = task.subtitle.trim();
        const updateTaskList = [task, ...tasks];
        // setTareas(updateTaskList);
        setTasks(updateTaskList);
        // console.log(tasks);
        console.log("param: " + JSON.stringify(task));
        // setTasks(updateTaskList);
        console.log("id " + task.id);
        console.log(tasks);
      }
    }


    let editTask = (event) => {

      let contentTitle = event.target.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.innerText;

      let contentSubtitle = event.target.parentElement.parentElement.parentElement.children[1].innerText;


      event.target.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.innerHTML = `<input class="inputEdit" type="text" value="${contentTitle}"/><button onclick='{
          event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerHTML = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].firstElementChild.value;

          event.target.parentNode.previousElementSibling.parentNode.innerHTML = event.target.parentNode.previousElementSibling.value;
      }'><img src='../src/assets/send-icon.svg' /></button>`;

      
      event.target.parentNode.style.display = "none";
      

      event.target.parentNode.parentNode.parentNode.childNodes[1].innerHTML = `<textarea rows="1" max class="inputEdit" type="text">${contentSubtitle}</textarea>`;
      
      
      // console.log(event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText);
      
      

      // console.log(event.target.parentNode);
      // editMode = true;
      // console.log(editMode);

      // console.log(event.target.parentNode.parentNode.parentNode.firstElementChild.lastChild);
      // event.target.parentNode.parentNode.parentNode.firstElementChild.lastChild
    };

    
    let delteTask = (event) => {
      console.log(event.target.parentNode.parentNode.parentNode.id);
      console.log(event.target.parentNode.parentNode.parentNode);
      tasks.map(task => {
        console.log(task.id)
        const taskDelete = tasks.filter(
          (task) => task.id != event.target.parentNode.parentNode.parentNode.id
        );
        setTasks(taskDelete);
      })
      
      completedTasks.map(taskCompleted => {
        console.log(taskCompleted.id)
        const taskCompletedDelete = completedTasks.filter(
          (taskCompleted) => taskCompleted.id != event.target.parentNode.parentNode.parentNode.id
        );
        setCompletedTasks(taskCompletedDelete);
      })
    };


  return (
    <>
      <InputTaskCreator onSubmit={addTask} />
      <main>
        {tasks.length ? (
          <div id="container-task-amount">
            <h2>
              You've <strong>{tasks.length}</strong> pending tasks
            </h2>
          </div>
        ) : (
          <div id="container-no-task">
            <img
              src="../src/assets/done-tasks-ilustration.svg"
              alt="ilustration"
            />
            <h2>You don't have tasks!</h2>
            <p>Did you remember {rememberTextList[randNum]}?</p>
          </div>
        )}
        {tasks.map((task) => (
          <CardTask
            key={uuidv4()}
            id={task.id}
            title={task.title}
            subtitle={task.subtitle}
            completed={task.completed}
            completeTask={completeTask}
            onClickDeleteBtn={delteTask}
            onClickEditBtn={editTask}
            edit={bool}
          />
        ))}
        {tasks.length >= 1 ? (
          completedTasks.length ? (
            <div id="container-task-amount">
              <h2>
                You've <strong>{completedTasks.length}</strong> complete tasks
              </h2>
            </div>
          ) : null
        ) : null}
        {tasks.length >= 1
          ? completedTasks.map((taskCompleted) => (
              <CardTask
                key={uuidv4()}
                id={taskCompleted.id}
                title={taskCompleted.title}
                subtitle={taskCompleted.subtitle}
                completed={taskCompleted.completed}
                completeTask={completeTask}
                onClickDeleteBtn={delteTask}
                onClickEditBtn={editTask}
                edit={bool}
              />
            ))
          : null}
      </main>
    </>
  );
// console.log(uuidv4());

};

export default AddTask;
