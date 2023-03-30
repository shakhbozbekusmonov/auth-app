import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";

const AuthenticatedApp = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to='/users' />} />
                <Route path='/users' element={<Home />} />
                <Route path='/profile/:user_id' element={<Profile />} />
            </Routes>
        </>
    );
};

export default AuthenticatedApp;
