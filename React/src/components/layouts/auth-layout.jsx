import { useState } from "react"
import Login from "../auth/login"
import Signup from "../auth/signup"
import { Outlet } from "react-router-dom"


function AuthLayout() {
    const [isLogin, setIsLogin] = useState("true")
    const updateState = (newState) => {
        setIsLogin = (newState);
    }
    return (
        <>
            <Outlet />
            {isLogin && <Login updateState={updateState} />}
            {!isLogin && <Signup updateState={updateState} />}

        </>
    )


}
export default AuthLayout;