import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBer/NavBar";

const Main = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Main;