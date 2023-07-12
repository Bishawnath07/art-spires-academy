import Instructors from "../Instructors/Instructors";
import AllCourse from "./AllCourse/AllCourse";
import CarouselComponent from "./Banner/CarouselComponent";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";

import LatestBlog from "./LatestBlog/LatestBlog";
import PopularClass from "./PopularClass/PopularClass";

const Home = () => {
    return (
           <>
            <CarouselComponent></CarouselComponent>
        <div className="max-w-6xl mx-auto ">
            <AllCourse></AllCourse>
            <FeaturedCourses></FeaturedCourses>
            <PopularClass></PopularClass>
            <Instructors></Instructors>
            <LatestBlog></LatestBlog>
        </div>
           </>
    );
};

export default Home;