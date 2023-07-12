import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './image/icon-1.png'
import img2 from './image/icon-2.png'
import img3 from './image/icon-3.png'
import img4 from './image/icon-4.png'
import img5 from './image/icon-5.png'
import img6 from './image/icon-6.png'

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="text-center">
        <img className=" mx-auto" src={img1} alt="" />
        <h3 className="font-semibold my-4">art and humanities</h3>
      </div>
      <div className="text-center">
      <img className=" mx-auto" src={img2} alt="" />
        <h3 className="font-semibold my-4">Business</h3>
      </div>
      <div className="text-center">
      <img className=" mx-auto" src={img3} alt="" />
        <h3 className="font-semibold my-4">Computer Science</h3>
      </div>
      <div className="text-center">
        <img className=" mx-auto" src={img4} alt="" />
        <h3 className="font-semibold my-4"> Data Science</h3>
      </div>
      <div className="text-center">
      <img className=" mx-auto" src={img5} alt="" />
        <h3 className="font-semibold my-4">Math Logic</h3>
      </div>
      <div className="text-center">
      <img className=" mx-auto" src={img6} alt="" />
        <h3 className="font-semibold my-4">Language Learing</h3>
      </div>
    </Slider>
  );
};

export default AutoSlider;
