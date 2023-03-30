import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
    const [auth, setAuth] = React.useState(
        JSON.parse(window.localStorage.getItem("token")) || null
    );
    React.useEffect(() => {
        if (auth) {
            window.localStorage.setItem("token", JSON.stringify(auth));
        } else {
            window.localStorage.removeItem("token");
        }
    }, [auth]);
    return (
        <Context.Provider value={{ auth, setAuth }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
