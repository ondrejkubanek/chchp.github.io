import React from "react"
import ReactDOM from "react-dom"
//import Navbar from "./components/Navbar" -- routing bez pouziti komponenty react-router-dom


// StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI.
//It activates additional checks and warnings for its descendants.
ReactDOM.render(
    <React.StrictMode>
        <Navbar/>


    </React.StrictMode>,
    document.getElementById("root")
)