import React from "react";
import ReactDOM from "react-dom/client";
//import {FirstApp} from "./FirstApp";
import {Counter} from './Counter'
import "./styles.css"

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <Counter value={10} />
  </React.StrictMode>
  )