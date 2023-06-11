import {  FaBookmark,  FaHome, FaRegBookmark,  FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import NavBar from "../Shared/NavBer/NavBar";


const DashBoard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor]= useInstructor();

    return (
        <>
        <NavBar></NavBar>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 ">
                    {/* Sidebar content here */}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminhome">
                                    <FaHome></FaHome> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageclass">
                                    <FaUsers></FaUsers> Manage Classe
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    <FaUsers></FaUsers> Manage Users
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/">
                                    <FaUsers></FaUsers> Back Home
                                </NavLink>
                            </li>
                        </>
                    ) || isInstructor &&
                        <>
                            <li>
                                <NavLink to="/dashboard/addclass">
                                    <FaHome></FaHome>Add a Class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myclass">
                                    <FaUsers></FaUsers> My Classe
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink to="/dashboard/getfeedback">
                                    <FaUsers></FaUsers> Feedback
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                <FaHome></FaHome> Back Home
                                </NavLink>
                            </li>
                        </>
                     ||
                        // Default case when neither isAdmin nor isInstructor is true
                        <>
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/selectclass">
                                    <FaRegBookmark></FaRegBookmark> My Selected Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/enrollclass">
                                    <FaBookmark></FaBookmark> My Enrolled Classes
                                </NavLink>
                            </li>
                           
                        </>
                    }

                </ul>

            </div>
        </div>
        </>
    );
};

export default DashBoard;