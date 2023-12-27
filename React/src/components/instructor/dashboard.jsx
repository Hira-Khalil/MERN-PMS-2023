
function Dashboard() {
    return (
        <>

            <div className="h-screen w-screen flex justify-end ">
                <div className=" ps-12 w-10/12 h-5/6">
                    <nav aria-label="breadcrumb" className="text-black w-full p-4 dark:bg-gray-800 dark:text-gray-100">
                        <ol className="text-black mt-6 flex h-8 space-x-2 dark:text-gray-100 px-5">
                            <li className="text-black flex items-center ">
                                <a rel="noopener noreferrer" href="#" title="Back to homepage" className="text-black text-sm hover:text-black flex items-center hover:underline">Instructor</a>
                            </li>
                            <li className="flex items-center space-x-1">
                                <span className="dark:text-gray-400">/</span>
                                <a rel="noopener noreferrer" href="#" className="text-black text-sm hover:text-black flex items-center px-1 capitalize hover:underline">Main Dashboard</a>
                            </li>
                        </ol>
                        <h3 className="font-bold px-5 text-3xl">Main Dashboard</h3>

                    </nav>
                    <section className="px-5 md:p-8 dark:bg-gray-800 dark:text-gray-100">
                        <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
                            <div className="bg-white  rounded-full flex overflow-hidden dark:bg-gray-900 dark:text-gray-100">
                                <div className=" flex items-center justify-center  px-4 rounded-full bg-indigo-500 text-white dark:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                        <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
                                        <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
                                        <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between flex-1 p-3">
                                    <p className="text-2xl font-semibold">200+</p>
                                    <p>Total Projects</p>
                                </div>
                            </div>
                            <div className="bg-white  rounded-full flex overflow-hidden dark:bg-gray-900 dark:text-gray-100">
                                <div className=" flex items-center justify-center  px-4 rounded-full bg-indigo-500 text-white dark:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                        <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                                        <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between flex-1 p-3">
                                    <p className="text-2xl font-semibold">7 500+</p>
                                    <p>Total Trainees</p>
                                </div>
                            </div>
                            <div className="bg-white  rounded-full flex overflow-hidden dark:bg-gray-900 dark:text-gray-100">
                                <div className=" flex items-center justify-center  px-4 rounded-full bg-indigo-500 text-white dark:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-8 h-8 text-white" viewBox="0 0 100 100">
                                        <path font-weight="bold" fill-rule="nonzero" stroke="none" stroke-width="3" fill="#ffffff" d="M 52 17 C 45.936593 17 41 21.936593 41 28 C 41 29.798052 41.437305 31.49814 42.205078 33 L 18 33 C 15.802666 33 14 34.802666 14 37 L 14 65 C 14 67.197334 15.802666 69 18 69 L 35.277344 69 C 35.562007 70.597018 36.056265 72.122252 36.753906 73.53125 C 39.531864 79.144553 45.323279 83 52 83 C 60.346484 83 67.28819 76.955587 68.716797 69.015625 C 70.500198 70.259846 72.66539 71 75 71 C 81.063407 71 86 66.063407 86 60 L 86 46 C 86 43.802666 84.197334 42 82 42 L 65 42 L 50 42 L 50 38.810547 C 50.650274 38.93011 51.317358 39 52 39 C 58.063407 39 63 34.063407 63 28 C 63 21.936593 58.063407 17 52 17 z M 52 19 C 56.982593 19 61 23.017407 61 28 C 61 32.982593 56.982593 37 52 37 C 51.30252 37 50.626111 36.920973 49.976562 36.771484 C 49.854551 34.681152 48.119141 33 46 33 L 44.521484 33 C 43.563098 31.569767 43 29.855525 43 28 C 43 23.017407 47.017407 19 52 19 z M 75 25 C 71.145849 25 68 28.145852 68 32 C 68 35.854148 71.145849 39 75 39 C 78.854151 39 82 35.854148 82 32 C 82 28.145852 78.854151 25 75 25 z M 75 27 C 77.773271 27 80 29.226731 80 32 C 80 34.773269 77.773271 37 75 37 C 72.226729 37 70 34.773269 70 32 C 70 29.226731 72.226729 27 75 27 z M 18 35 L 46 35 C 47.116666 35 48 35.883334 48 37 L 48 65 C 48 66.116666 47.116666 67 46 67 L 18 67 C 16.883334 67 16 66.116666 16 65 L 16 37 C 16 35.883334 16.883334 35 18 35 z M 23.5 41 A 0.50005 0.50005 0 0 0 23 41.5 L 23 45.5 A 0.50005 0.50005 0 0 0 23.5 46 L 29.5 46 L 29.5 60.5 A 0.50005 0.50005 0 0 0 30 61 L 34 61 A 0.50005 0.50005 0 0 0 34.5 60.5 L 34.5 46 L 40.5 46 A 0.50005 0.50005 0 0 0 41 45.5 L 41 41.5 A 0.50005 0.50005 0 0 0 40.5 41 L 23.5 41 z M 24 42 L 40 42 L 40 45 L 34 45 A 0.50005 0.50005 0 0 0 33.5 45.5 L 33.5 60 L 30.5 60 L 30.5 45.5 A 0.50005 0.50005 0 0 0 30 45 L 24 45 L 24 42 z M 50 44 L 65 44 C 66.116666 44 67 44.883334 67 46 L 67 66 C 67 74.296621 60.296621 81 52 81 C 46.092721 81 40.996917 77.593275 38.546875 72.642578 C 37.982752 71.503242 37.566403 70.280722 37.306641 69 L 46 69 C 48.197334 69 50 67.197334 50 65 L 50 44 z M 68.439453 44 L 82 44 C 83.116666 44 84 44.883334 84 46 L 84 60 C 84 64.982593 79.982593 69 75 69 C 72.67086 69 70.563302 68.115845 68.966797 66.669922 C 68.975579 66.445929 69 66.226116 69 66 L 69 46 C 69 45.269312 68.786352 44.59163 68.439453 44 z M 64.492188 45.992188 A 0.50005 0.50005 0 0 0 64 46.5 L 64 50.5 A 0.50005 0.50005 0 1 0 65 50.5 L 65 46.5 A 0.50005 0.50005 0 0 0 64.492188 45.992188 z M 64.492188 52.992188 A 0.50005 0.50005 0 0 0 64 53.5 L 64 66 C 64 68.267203 63.369772 70.385689 62.273438 72.195312 A 0.50005 0.50005 0 1 0 63.128906 72.712891 C 64.316571 70.752515 65 68.452797 65 66 L 65 53.5 A 0.50005 0.50005 0 0 0 64.492188 52.992188 z M 59.449219 75.539062 A 0.50005 0.50005 0 0 0 59.136719 75.640625 C 57.140375 77.122279 54.673526 78 52 78 C 51.51792 78 51.042562 77.970826 50.574219 77.916016 A 0.5003982 0.5003982 0 1 0 50.458984 78.910156 C 50.964641 78.969336 51.47808 79 52 79 C 54.892474 79 57.570765 78.04966 59.732422 76.445312 A 0.50005 0.50005 0 0 0 59.449219 75.539062 z"></path>
                                    </svg>


                                </div>
                                <div className="flex items-center justify-between flex-1 p-3">
                                    <p className="text-2xl font-semibold">14</p>
                                    <p>Total Teams</p>
                                </div>
                            </div>
                            <div className="bg-white  rounded-full flex overflow-hidden dark:bg-gray-900 dark:text-gray-100">
                                <div className=" flex items-center justify-center  px-4 rounded-full bg-indigo-500 text-white dark:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                        <path d="M256.25,16A240,240,0,0,0,88,84.977V16H56V144H184V112H106.287A208,208,0,0,1,256.25,48C370.8,48,464,141.2,464,255.75S370.8,463.5,256.25,463.5,48.5,370.3,48.5,255.75h-32A239.75,239.75,0,0,0,425.779,425.279,239.75,239.75,0,0,0,256.25,16Z"></path>
                                        <polygon points="240 111.951 239.465 288 368 288 368 256 271.563 256 272 112.049 240 111.951"></polygon>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between flex-1 p-3">
                                    <p className="text-2xl font-semibold">24/7 h</p>
                                    <p>Projects Assigned</p>
                                </div>
                            </div>
                            <div className="bg-white  rounded-full flex overflow-hidden dark:bg-gray-900 dark:text-gray-100">
                                <div className=" flex items-center justify-center  px-4 rounded-full bg-indigo-500 text-white dark:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                        <path d="M415.313,358.7c36.453-36.452,55.906-85.231,54.779-137.353-1.112-51.375-21.964-99.908-58.715-136.66L388.75,107.314A166.816,166.816,0,0,1,438.1,222.039c.937,43.313-15.191,83.81-45.463,114.083l-48.617,49.051.044-89.165-32-.016L311.992,440H456.063V408H366.449Z"></path>
                                        <path d="M47.937,112h89.614L88.687,161.3c-36.453,36.451-55.906,85.231-54.779,137.352a198.676,198.676,0,0,0,58.715,136.66l22.627-22.627A166.818,166.818,0,0,1,65.9,297.962c-.937-43.314,15.191-83.811,45.463-114.083l48.617-49.051-.044,89.165,32,.015L192.008,80H47.937Z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between flex-1 p-3">
                                    <p className="text-2xl font-semibold">99.9%</p>
                                    <p>Unassigned Projects</p>
                                </div>
                            </div>
                            <div className="bg-white  rounded-full flex overflow-hidden dark:bg-gray-900 dark:text-gray-100">
                                <div className=" flex items-center justify-center  px-4 rounded-full bg-indigo-500 text-white dark:text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                        <path d="M416,180H320V340h96a20.023,20.023,0,0,0,20-20V200A20.023,20.023,0,0,0,416,180ZM404,308H352V212h52Z"></path>
                                        <path d="M436.574,120H352V64H32V408a64.072,64.072,0,0,0,64,64H288a64.072,64.072,0,0,0,64-64v-8h84.574A59.493,59.493,0,0,0,496,340.574V179.426A59.493,59.493,0,0,0,436.574,120ZM464,340.574A27.457,27.457,0,0,1,436.574,368H320v40a32.036,32.036,0,0,1-32,32H96a32.036,32.036,0,0,1-32-32V96H320v56H436.574A27.457,27.457,0,0,1,464,179.426Z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between flex-1 p-3">
                                    <p className="text-2xl font-semibold">720L</p>
                                    <p>Total classes</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
