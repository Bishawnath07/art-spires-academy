import Instructors from "../Instructors/Instructors";
import AllCourse from "./AllCourse/AllCourse";
import CarouselComponent from "./Banner/CarouselComponent";
// import FeaturedBlog from "./FeaturedBlog/FeaturedBlog";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";

import LatestBlog from "./LatestBlog/LatestBlog";
import LiveClass from "./LiveClass/LiveClass";
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
            <LiveClass></LiveClass>
            <LatestBlog></LatestBlog>
            {/* <FeaturedBlog></FeaturedBlog> */}

        </div>
           </>
    );
};

export default Home;