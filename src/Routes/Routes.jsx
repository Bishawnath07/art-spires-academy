import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../Layout/DashBoard";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import MakeInstructor from "../Pages/DashBoard/MakeInstructor/MakeInstructor";
import InstructorHome from "../Pages/DashBoard/Instructor/InstructorHome/InstructorHome";
import StudentHome from "../Layout/StudentHome/StudentHome";

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
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'allusers' ,
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path: 'manageinstructor' ,
          element: <MakeInstructor></MakeInstructor>
        },
        {
          path: 'instructorhome' ,
          element: <InstructorHome></InstructorHome>
        },
        {
          path: 'home' ,
          element: <StudentHome></StudentHome>
        }
      ]
    }
  ]);

  export default router;