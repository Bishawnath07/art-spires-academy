import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBer/NavBar";

const Main = () => {
    const location= useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') ;
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Main;