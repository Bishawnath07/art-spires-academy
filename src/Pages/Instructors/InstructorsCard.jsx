import { HiOutlineMail } from "react-icons/hi";

const InstructorsCard = ({instructorDetails}) => {
    const {role , name  , email } = instructorDetails;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          
            <div className="card-body">
                <h2 className="card-title">
                 {name}
                </h2>
                <p className="flex items-center gap-3"><HiOutlineMail></HiOutlineMail> Email - {email}</p>
                <p> Role :   {role}</p>
                <div className="card-actions justify-end">
                    <button className="badge badge-outline">Details</button>
                    
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;