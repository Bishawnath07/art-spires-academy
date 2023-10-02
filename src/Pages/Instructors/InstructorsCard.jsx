import { HiOutlineMail } from "react-icons/hi";

const InstructorsCard = ({instructorDetails}) => {
    console.log(instructorDetails)
    const { name ,photo , email } = instructorDetails;
    return (
        <div className="card shadow-xl ">
          <figure className=" transition duration-500 transform hover:-translate-y-2 rounded-lg shadow- hover:shadow-2xl "><img className="rounded-md h-[280px] md:hh-[300px] " src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                 {name}
                </h2>
                <p className="flex items-center gap-3"><HiOutlineMail></HiOutlineMail> {email}</p>
        
            </div>
        </div>
    );
};

export default InstructorsCard;