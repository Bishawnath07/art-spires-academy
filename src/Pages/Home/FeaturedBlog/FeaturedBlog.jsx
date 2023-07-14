import img1 from './Images/blog-1.jpg'

const FeaturedBlog = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold">Our Featured Blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque maxime natus dolorum illo totam modi exercitationem corporis, deleniti alias placeat reprehenderit deserunt similique necessitatibus vitae at! Libero, officia nostrum!</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className='relative'>
                    <img src={img1} alt="" />
                    <div className='absolute'>
                        <h3 >What are the most popular blogs?</h3>
                        <button className='btn '>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlog;