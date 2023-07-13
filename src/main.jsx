import React from "react";
import ReacDom from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'react-icons'
import App from "./App";

ReacDom.createRoot(document.querySelector("#root")).render(
    <App />
)