import Instructors from "../Instructors/Instructors";
import CarouselComponent from "./Banner/CarouselComponent";

import LatestBlog from "./LatestBlog/LatestBlog";
import PopularClass from "./PopularClass/PopularClass";

const Home = () => {
    return (
           <>
            <CarouselComponent></CarouselComponent>
        <div className="max-w-6xl mx-auto ">
            
            <PopularClass></PopularClass>
            <Instructors></Instructors>
            <LatestBlog></LatestBlog>
        </div>
           </>
    );
};

export default Home;