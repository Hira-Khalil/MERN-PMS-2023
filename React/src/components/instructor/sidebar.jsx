import { useState } from "react";
import Team from "./Team-management/team";
import { MdDashboard } from "react-icons/md";
import { PiStackSimpleFill } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { GrTasks } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";




const Sidebar = (updateState) => {

    const [open, setOpen] = useState(true);

    return (
        <div className="bg-white shadow-xl h-screen p-3 space-y-2 w-72 dark:bg-gray-900 dark:text-gray-100 absolute">
            <div className=" pt-7 space-x-4">
                <div className=" flex items-center justify-center p-3">
                    <h2 className="text-3xl font-bold text-black pb-3"> PROJECT</h2><span className="text-3xl ms-1 pb-3">VISTA</span>

                </div>
            </div>
            <hr />
            <div className=" divide-y dark:divide-gray-700">
                <ul className="pt-4 pb-4 space-y-1 text-md  ps-8 pe-2">
                    <li className="border-indigo-600 border-r-4" onClick={() => {
                        void updateState.updateState("DASHBOARD")
                    }}>
                        <a rel="noopener noreferrer" href="#" className="hover:text-inherit text-black flex items-center p-2 space-x-3 rounded-md">
                            <MdDashboard className="text-indigo-600" />

                            <span className="ps-2 font-sans">Main Dashboard</span>
                        </a>
                    </li>
                    <li className="dark:bg-gray-800 dark:text-gray-50  " onClick={() => {
                        void updateState.updateState("STACKS")
                    }}>

                        <a rel="noopener noreferrer" href="#" className="hover:text-current text-gray-400 flex items-center p-2 space-x-3 rounded-md">
                            <PiStackSimpleFill />

                            <span className="ps-2">Stacks</span>
                        </a>
                    </li>
                    <li className="dark:bg-gray-800 dark:text-gray-50  " onClick={() => {
                        void updateState.updateState("PROJECTS")
                    }}>
                        <a rel="noopener noreferrer" href="#" className="hover:text-current text-gray-400 flex items-center p-2 space-x-3 rounded-md">
                            <GoProjectSymlink />

                            <span className="ps-2"> Student Projects</span>
                        </a>
                    </li>
                    <li className="dark:bg-gray-800 dark:text-gray-50  " onClick={() => {
                        void updateState.updateState("TEAMS")
                    }}>
                        <a rel="noopener noreferrer" href="#" className="hover:text-current text-gray-400 flex items-center p-2 space-x-3 rounded-md">
                            <RiTeamFill />

                            <span className="ps-2">Teams</span>
                        </a>
                    </li>
                    <li className="dark:bg-gray-800 dark:text-gray-50  " onClick={() => {
                        void updateState.updateState("TASKS")
                    }}>
                        <a rel="noopener noreferrer" href="#" className="hover:text-current text-gray-400 flex items-center p-2 space-x-3 rounded-md">
                            <GrTasks />

                            <span className="ps-2">Project Tasks</span>
                        </a>
                    </li>
                    <li className="dark:bg-gray-800 dark:text-gray-50  " onClick={() => {
                        void updateState.updateState("TRAINEE")
                    }}>
                        <a rel="noopener noreferrer" href="#" className="hover:text-current text-gray-400 flex items-center p-2 space-x-3 rounded-md">
                            <FaUsers />

                            <span className="ps-2">Trainee List</span>
                        </a>
                    </li>
                    <li className="text-black fixed bottom-2 w-48">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="inline w-10 h-10 rounded-full dark:bg-gray-500" />
                        <h2 className="ms-2 inline text-lg font-semibold ">Leroy Jenkins</h2>
                        <span className="space-x-1 ms-12">
                            <a rel="noopener noreferrer" href="#" className="inline-block fixed top-30 text-xs  dark:text-gray-400">View profile</a>
                        </span>
                    </li>
                </ul>
            </div >
        </div >
    );
};

export default Sidebar;
