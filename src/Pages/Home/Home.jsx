import Banner from "./Banner/Banner";
import PopularClass from "./PopularClass/PopularClass";

const Home = () => {
    return (
        <div className="max-w-screen-xl">
            <Banner></Banner>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;