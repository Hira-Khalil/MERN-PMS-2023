import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Nav from './components/navbar';
// import Sidebar from './components/instructor/sidebar';
import Team from './components/instructor/Team-management/team';
import Project from './components/instructor/Project-management/project';
import Task from './components/instructor/Task-management/task';
import Dashboard from './components/trainee/dashboard';
import Sidebar from './components/trainee/sidebar';
import ProjectDetails from './components/trainee/project-details';
import Stack from './components/instructor/stack-management/stack';
import Trainee from './components/instructor/Trainee-management/trainee';
import { useState } from 'react'
import ProgressAnalytics from './components/trainee/progress-analytics';
import Tasks from './components/trainee/tasks';

function Layout() {
  const [component, setComponent] = useState("DASHBOARD");
  const updateState = (newState) => {
    setComponent(newState);
  }
  // const [isLogin, setIsLogin] = useState(true);
  // const updateState = (newState) => {
  //   setIsLogin(newState);
  // }
  return (
    <>
      <div className="bg-light-grey">
        {/* {isLogin && <Login updateState={updateState} />}
      {!isLogin && <Signup updateState={updateState} />} */}
        <Nav />

        <Sidebar updateState={updateState} />
        {component == "DASHBOARD" && <Dashboard updateState={updateState} />}
        {component == "STACKS" && <Stack updateState={updateState} />}
        {component == "PROJECTS" && <Project updateState={updateState} />}
        {component == "TEAMS" && <Team updateState={updateState} />}
        {component == "TASKS" && <Tasks updateState={updateState} />}
        {component == "TRAINEE" && <Trainee updateState={updateState} />}
        {component == "PROJECT DETAILS" && <ProjectDetails updateState={updateState} />}
        {component == "PROGRESS ANALYTICS" && <ProgressAnalytics updateState={updateState} />}



      </div>

    </>
  )
}

export default Layout
