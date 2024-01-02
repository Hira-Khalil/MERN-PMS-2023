import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { PiStackSimpleFill } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { GrTasks } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";

import { IoMdAnalytics } from "react-icons/io";



const Sidebar = (updateState) => {

    const [open, setOpen] = useState(true);

    return (
        <div className="bg-white shadow-xl h-screen p-2 space-y-2 w-72 dark:bg-gray-900 dark:text-gray-100 absolute">
            <div className=" pt-7 space-x-4">
                <div className=" flex items-center justify-center p-3">
                    <h2 className="text-2xl font-bold text-black pb-3"> PROJECT</h2><span className="text-2xl ms-1 pb-3">VISTA</span>

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

                            <span className="ps-2 font-sans">Dashboard</span>
                        </a>
                    </li>
                    <li className="dark:bg-gray-800 dark:text-gray-50  " onClick={() => {
                        void updateState.updateState("PROJECTDETAILS")
                    }}>

                        <a rel="noopener noreferrer" href="#" className="hover:text-current text-gray-400 flex items-center p-2 space-x-3 rounded-md">
                            <PiStackSimpleFill />

                            <span className="ps-2">Project Details</span>
                        </a>
                    </li>
                    <li className="dark:bg-gray-800 dark:text-gray-50  " onClick={() => {
                        void updateState.updateState("TASKS")
                    }}>
                        <a rel="noopener noreferrer" href="#" className="hover:text-current text-gray-400 flex items-center p-2 space-x-3 rounded-md">
                            <GoProjectSymlink />

                            <span className="ps-2"> Tasks</span>
                        </a>
                    </li>
                    <li className="dark:bg-gray-800 dark:text-gray-50  " onClick={() => {
                        void updateState.updateState("PROGRESSANALYTICS")
                    }}>
                        <a rel="noopener noreferrer" href="#" className="hover:text-current text-gray-400 flex items-center p-2 space-x-3 rounded-md">
                            <IoMdAnalytics />

                            <span className="ps-2">Progress Analytics</span>
                        </a>
                    </li>

                </ul>
            </div >
        </div >
    );
};

export default Sidebar;