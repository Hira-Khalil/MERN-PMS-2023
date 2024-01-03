import React from "react";

import TraineeLayout from "./components/layouts/trainee-layout";
import OnBoarding from "./components/auth/on-boarding";
import NotFound from "./components/not-found";
import ProtectedRoute from "./components/middleware";
import AuthLayout from "./components/layouts/auth-layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<AuthLayout />} />
                    <Route path="onBoarding" element={<OnBoarding />} />
                </Route>
                <Route
                    path="trainee"
                    element={
                        <ProtectedRoute>
                            <TraineeLayout />
                        </ProtectedRoute>
                    }
                ></Route>
                <Route path="404" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
