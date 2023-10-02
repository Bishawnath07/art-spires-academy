import SectionTitle from "../../../Components/SectionTitle";
import img1 from './images/course-1.jpg'
import img2 from './images/course-2.jpg'
import img3 from './images/course-3.jpg'
import img4 from './images/course-4.jpg'
import img5 from './images/course-5.jpg'
import img6 from './images/course-6.jpg'

const FeaturedCourses = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"FEATURED COURSE"}
                heading={"Classes for Your Kids"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-black">
                <div className="card card-compact mx-4 md:mx-0 bg- bg-cyan-500  shadow-xl">
                    <figure><img className="hover:scale-125 transform transition-all duration-300" src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Software Development</h2>
                        <hr />
                        <div className="flex justify-between font-semibold">
                        <p className='text-[12px] md:text-[14px]'> Instructor: Adam Smith</p>
                        <p className='text-[12px] md:text-[14px]'>$120.00</p>
                        </div>
                       
                    </div>
                </div>
                <div className="card card-compact mx-4 md:mx-0  bg-cyan-500  shadow-xl">
                    <figure><img className="hover:scale-125 transform transition-all duration-300" src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Business Essentials</h2>
                        <hr />
                        <div className="flex justify-between font-semibold">
                        <p className='text-[12px] md:text-[14px]'>Instructor: Adam Smith</p>
                        <p className='text-[12px] md:text-[14px]'>$120.00</p>
                        </div>
                       
                    </div>
                </div><div className="card card-compact mx-4 md:mx-0  bg-cyan-500  shadow-xl">
                    <figure><img className="hover:scale-125 transform transition-all duration-300" src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">History & Philosophy</h2>
                        <hr />
                        <div className="flex justify-between font-semibold">
                        <p>Instructor: Adam Smith</p>
                        <p>$120.00</p>
                        </div>
                    </div>
                </div>
                <div className="card card-compact mx-4 md:mx-0  bg-cyan-500  shadow-xl">
                    <figure><img className="hover:scale-125 transform transition-all duration-300" src={img4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Algebra & Calculus</h2>
                        <hr />
                        <div className="flex justify-between font-semibold">
                        <p>Instructor: John Doe</p>
                        <p>$115.00</p>
                        </div>
                    </div>
                </div><div className="card card-compact mx-4 md:mx-0  bg-cyan-500  shadow-xl">
                    <figure><img className="hover:scale-125 transform transition-all duration-300" src={img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">English Learning</h2>
                        <hr />
                        <div className="flex justify-between font-semibold">
                        <p className='text-[12px] md:text-[14px]'>Instructor: John Doe</p>
                        <p className='text-[12px] md:text-[14px]'>Free</p>
                        </div>
                    </div>
                </div><div className="card card-compact mx-4 md:mx-0  bg-cyan-500  shadow-xl">
                    <figure><img className="hover:scale-125 transform transition-all duration-300" src={img6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Business Strategy</h2>
                        <hr />
                        <div className="flex justify-between font-semibold">
                        <p className='text-[12px] md:text-[14px]'>Instructor: John Doe</p>
                        <p className='text-[12px] md:text-[14px]'>Free</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCourses;