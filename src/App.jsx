import { useState } from "react";
import {InputTaskAdd} from "./components/InputTaskAdd";
import AddTask from "./components/AddTask";
import Loader from "./components/Loader";


// Styles
import './App.css'


let App = () => {

  const [loading, setLoading] = useState(true);

  window.addEventListener("load", function () {
    setLoading(false);
  });

  return (
    <>
      {/* <InputTaskAdd /> */}
      {loading ? <Loader /> : <AddTask />}
    </>
  )
}

export default App
