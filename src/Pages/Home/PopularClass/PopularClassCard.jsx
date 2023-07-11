import { FaArrowRight } from "react-icons/fa";

const PopularClassCard = ({ pclass }) => {
    const { image, name , price} = pclass;

    return (
        //     <div className="card bg-base-100 shadow-xl ">
        //     <figure><img className="rounded-md h-[350px] w-[350px]" src={image} alt="instuctor" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             {name} 
        //         </h2>

        //         <p className="font-semibold"> Email :  {email}</p>
        //         <div className="card-actions gap-5 justify-start">
        //             <button className="badge badge-outline"> Enrolled: { enroll} </button>


        //         </div>

        //     </div>
        // </div>
        <div className='overflow-hidden relative transition duration-500 transform hover:-translate-y-2 rounded-lg shadow-lg hover:shadow-2xl'>
            <img src={image} alt="book cover" className='object-cover w-full h-56 md:h-64 xl:h-80' />
            <div className='bg-black bg-opacity-80 px-6 py-4 text-gray-300 absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 '>
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold  text-amber-400">{name} Class</h2>
                    <p className="text-xl absolute top-5 right-5 btn btn-circle btn-info font-semibold text-teal-50">{price}৳</p>
                    <p className="font-semibold my-3">Here are some tips on how you can use neutral tones to create and edit your images with a more realistic look</p>
                    <button className="flex flex-row items-center gap-7"><span className="text-xl font-bold text-amber-400">Learn More</span > <FaArrowRight  className=" text-amber-400"></FaArrowRight> </button>
                </div>
            </div>

        </div>
    );
};

export default PopularClassCard;