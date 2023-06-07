import img from './image/Add a heading.png'

const Banner = () => {
    return (
        <div className='bg-cyan-800 md:flex justify-between h-[600px] className="max-w-screen-xl"'>
           <div className='ml-5 mt-16 text-white w-1/2'>
            <h3 className='text-3xl font-bold'>Kids Learning Center</h3>
            <h1 className='text-5xl font-bold my-8'>New Approach to <br /> Kids Education</h1>
            <p>Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo dolore.</p>
            <button className='btn rounded-btn mt-8'>Learn More</button>
           </div>
           <div className='mr-10 mt-10'>
           <img className='w-[500px]' src={img} alt="" />
           </div>
        </div>
    );
};

export default Banner;