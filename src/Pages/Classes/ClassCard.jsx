import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ClassCard = ({item}) => {
    const {user} = useContext(AuthContext)
    const {Image , Name , Instructor  ,  Seats , Price} =item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={Image} alt="instuctor" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                {Name} Class
            </h2>
            <p className="font-semibold">Teacher :  {Instructor}</p>
            <div className="card-actions justify-start">
                <button className="badge badge-outline">Seats: {Seats}</button>
                <button className="badge badge-outline">Pice: {Price}</button>
                {
                    user ?  <button className="badge badge-outline ml-20">Select</button> : <button className="badge badge-outline ml-20 disabled">Select</button>
                }
            </div>
        </div>
    </div>
    );
};

export default ClassCard;