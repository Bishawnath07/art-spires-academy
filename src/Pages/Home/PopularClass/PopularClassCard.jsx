
const PopularClassCard = ({ pclass }) => {
    const {  image, name } = pclass;

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
                <p className="text-2xl font-semibold">{name} Class</p>
                
            </div>

        </div>
    );
};

export default PopularClassCard;