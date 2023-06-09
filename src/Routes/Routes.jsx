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
import PrivateRoute from "./PrivetRoute";
import AddClass from "../Pages/DashBoard/InstructorDashboard/AddClass";
import ManageClass from "../Pages/DashBoard/AdminDashboard/ManageClass";
import EnrollClass from "../Pages/DashBoard/StudentDashboard/EnrollClass";
import SelectedClass from "../Layout/StudentHome/SelectedClass";
import Payment from "../Pages/DashBoard/Payment/Payment";


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
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
      children: [
        // admin relatate route
        {
          path: 'allusers' ,
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path: 'manageclass' ,
          element: <ManageClass></ManageClass>
        } ,
        //  instructor relatate route
        {
          path: 'addclass' ,
          element: <AddClass></AddClass>
        },

        // student relatate route
        {
          path: 'enrollclass' ,
          element: <EnrollClass></EnrollClass>
        } ,
        {
          path: 'selectclass' ,
          element: <SelectedClass></SelectedClass>
        },
        {
          path: 'payment' ,
          element: <Payment></Payment>
        }
        
      ]
    }
  ]);

  export default router;