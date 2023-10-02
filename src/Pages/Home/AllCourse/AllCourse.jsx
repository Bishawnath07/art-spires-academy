import AutoSlider from './AutoSlider'


const AllCourse = () => {
    return (
        <div className="md:mt-10 mt-5 ">
            <div className="text-center ">
                <h3 className="lg:text-4xl text-[24px] font-semibold mb-5">All Course Categories</h3>
                <p className="font-semibold text-center text-[14px]  md:text-[18px] md:mx-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
            <div className='my-10 '>
                <AutoSlider ></AutoSlider>
            </div>
        </div>
    );
};

export default AllCourse;