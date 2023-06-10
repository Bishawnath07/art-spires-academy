import CarouselComponent from "./Banner/CarouselComponent";
import PopularClass from "./PopularClass/PopularClass";

const Home = () => {
    return (
        <div className="max-w-screen-xl">
            
            <CarouselComponent></CarouselComponent>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;