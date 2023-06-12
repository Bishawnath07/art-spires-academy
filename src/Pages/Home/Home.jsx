import Instructors from "../Instructors/Instructors";
import CarouselComponent from "./Banner/CarouselComponent";
import LatestBlog from "./LatestBlog/LatestBlog";
import PopularClass from "./PopularClass/PopularClass";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            
            <CarouselComponent></CarouselComponent>
            <PopularClass></PopularClass>
            <Instructors></Instructors>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;