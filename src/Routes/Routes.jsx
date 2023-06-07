import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../Layout/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/' ,
            element: <Home></Home>
        },
        {
            path: '/instructors' ,
            element: <Instructors></Instructors>
        },
        {
            path: '/classes' ,
            element: <Classes></Classes>
        },
        {
            path: '/login' ,
            element: <Login></Login>
        },
        {
            path: '/signup' ,
            element: <SignUp></SignUp>
        } ,
      ]
    },
    {
      path: 'dashboard' ,
      element: <DashBoard></DashBoard>
    }
  ]);

  export default router;