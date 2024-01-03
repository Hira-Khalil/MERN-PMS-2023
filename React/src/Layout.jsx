// import React from 'react';
// import Dashboard from './components/trainee/dashboard';
// import ProgressAnalytics from './components/trainee/progress-analytics';
// import ProjectDetails from './components/trainee/project-details';
// import Tasks from './components/trainee/tasks';
// import Sidebar from './components/trainee/sidebar';
// import Nav from './components/navbar';


// import { useState } from 'react'

// function Layout() {
//   const [component, setComponent] = useState("DASHBOARD");
//   const updateState = (newState) => {
//     setComponent(newState);
//   }
//   // const [isLogin, setIsLogin] = useState(true);
//   // const updateState = (newState) => {
//   //   setIsLogin(newState);
//   // }
//   return (
//     <>
//       <div className="bg-light-grey h-screen w-screen overflow-x-hidden">
//         {/* {isLogin && <Login updateState={updateState} />}
//       {!isLogin && <Signup updateState={updateState} />} */}
//         <Nav />

//         <Sidebar updateState={updateState} />
//         {component == "DASHBOARD" && <Dashboard updateState={updateState} />}
//         {component == "PROJECTDETAILS" && <ProjectDetails updateState={updateState} />}
//         {component == "TASKS" && <Tasks updateState={updateState} />}
//         {component == "PROGRESSANALYTICS" && <ProgressAnalytics updateState={updateState} />}

//       </div>
// {/*  */}
//     </>
//   )
// }

// export default Layout