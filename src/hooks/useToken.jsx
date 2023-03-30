import React from "react";
import { Context } from "../context/authenticated";

const useToken = (setterOnly = false) => {
    const { auth, setAuth } = React.useContext(Context);

    return setterOnly ? [setAuth] : [auth, setAuth];
};

export default useToken;
