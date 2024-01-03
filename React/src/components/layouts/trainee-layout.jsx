import react, { useState } from "react";
import Nav from "../navbar";
import Sidebar from "../trainee/sidebar";
import Dashboard from "../trainee/dashboard"; Ta
import ProjectDetails from "../trainee/project-details";
import Tasks from "../trainee/tasks"
import ProgressAnalytics from "../trainee/progress-analytics";
function TraineeLayout() {
    const [component, setComponent] = useState("DASHBOARD");
    const updateState = (newState) => {
        setComponent(newState);
    };


    return (
        <>
            <div className="bg-light-grey h-screen w-screen overflow-x-hidden">

                <Nav />

                <Sidebar updateState={updateState} />
                {component == "DASHBOARD" && <Dashboard updateState={updateState} />}
                {component == "PROJECTDETAILS" && <ProjectDetails updateState={updateState} />}
                {component == "TASKS" && <Tasks updateState={updateState} />}
                {component == "PROGRESSANALYTICS" && <ProgressAnalytics updateState={updateState} />}

            </div>
        </>
    )
}
export default TraineeLayout;