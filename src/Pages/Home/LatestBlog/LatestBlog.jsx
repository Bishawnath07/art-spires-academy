import { Zoom } from "react-reveal";
import SectionTitle from "../../../Components/SectionTitle";
import img1 from '../images/blog-1.jpg'
import img2 from '../images/class-4.jpg'
import img3 from '../images/class-5.jpg'


const LatestBlog = () => {
    return (
        <div className="">
            <SectionTitle
                subHeading={'LATEST BLOG'}
                heading={'Latest Articles From Blog'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <div className="card card-compact mx-10  md:mx-0 bg-base-100 shadow-xl">
                    <figure>
                        <Zoom delay={2000}  duration={2000}><img src={img1} alt="Shoes" /></Zoom>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Diam amet eos at no eos</h2>
                        <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary my-4 btn-sm">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact mx-10  md:mx-0 bg-base-100 shadow-xl">
                    <figure> <Zoom delay={2000}  duration={2000}><img src={img2} alt="Shoes" /></Zoom></figure>
                    <div className="card-body">
                        <h2 className="card-title">Katherine Davis Author!</h2>
                        <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary my-4 btn-sm">Read More</button>
                        </div>
                    </div>
                </div><div className="card card-compact mx-10  md:mx-0 bg-base-100 shadow-xl">
                    <figure> <Zoom delay={2000}  duration={2000}><img src={img3} alt="Shoes" /></Zoom></figure>
                    <div className="card-body">
                        <h2 className="card-title">amet eos diam!</h2>
                        <p>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary my-4 btn-sm">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;