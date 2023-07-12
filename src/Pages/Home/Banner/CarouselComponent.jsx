import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img from './image/Screenshot (165).png'
import img1 from './image/Edu-School-Website-Template-1-scaled.jpg'

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop className='text-center  '>
      <div>
        <img src={img} alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src={img1} alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src={img} alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
