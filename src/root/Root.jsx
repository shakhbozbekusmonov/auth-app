import React from "react";
import UnAuthecticatedApp from "../components/Auth/UnAuthecticatedApp";
import AuthenticatedApp from "../components/Auth/AuthenticatedApp";
import useToken from "../hooks/useToken";

const Root = () => {
    const [auth] = useToken();

    if (auth) {
        return <AuthenticatedApp />;
    } else {
        return <UnAuthecticatedApp />;
    }
};

export default Root;
