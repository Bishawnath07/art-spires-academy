import { HiOutlineMail } from "react-icons/hi";

const InstructorsCard = ({instructorDetails}) => {
    console.log(instructorDetails)
    const {role , name ,photo , email } = instructorDetails;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img className="rounded-md h-[350px] w-[350px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                 {name}
                </h2>
                <p className="flex items-center gap-3"><HiOutlineMail></HiOutlineMail> Email - {email}</p>
                <p> Role :   {role}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary btn-sm mt-3 btn-outline">Details</button>
                    
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;