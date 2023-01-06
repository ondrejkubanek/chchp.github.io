import React from "react";

import "./pages/index.jsx";
import App from "./DEPRECATED_react_natives/App";
import "./DEPRECATED_react_natives/App.css";
import ReactDOM from "react-dom/client";


/*const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
]);*/


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    //<RouterProvider router={router} />,
    <App/>
);
