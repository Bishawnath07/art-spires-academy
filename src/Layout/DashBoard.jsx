import { FaCalendarAlt, FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>

                                <li><NavLink to="/dashboard/manageclasse"><FaUsers></FaUsers> Manage Classe</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users </NavLink></li>
                                <li><NavLink to="/dashboard/manageinstructor"><FaUsers></FaUsers> Make Instructor</NavLink></li>

                                <div className="divider"></div>
                                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                                <li><NavLink to="/menu"> Our Menu</NavLink></li>
                                <li><NavLink to="/order/salad">Order Food</NavLink></li>
                            </> :
                            <>
                                <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                <li><NavLink to="/dashboard/history"> Payment History</NavLink></li>
                               

                                <div className="divider"></div>
                                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                                <li><NavLink to="/menu"> Our Menu</NavLink></li>
                                <li><NavLink to="/order/salad">Order Food</NavLink></li>
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;