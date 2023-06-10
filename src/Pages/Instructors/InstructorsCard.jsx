import { HiOutlineMail } from "react-icons/hi";

const InstructorsCard = ({instructorDetails}) => {
    const {instructor , name  , email, image } = instructorDetails;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="instuctor" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                 Teacher Name:   {instructor}
                </h2>
                <p className="flex items-center gap-3"><HiOutlineMail></HiOutlineMail> Email - {email}</p>
                <p>{name} Teacher</p>
                <div className="card-actions justify-end">
                    <button className="badge badge-outline">Details</button>
                    
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;