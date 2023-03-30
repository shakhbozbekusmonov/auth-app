import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider as AuthProvider } from "./context/authenticated";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Root />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
