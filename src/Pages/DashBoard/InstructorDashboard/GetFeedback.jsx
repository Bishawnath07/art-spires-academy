import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";

const GetFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getfeedback')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <div className="w-full">
            <SectionTitle
             subHeading={"Feedback Message"}
             heading={"Admin feedback message"}
            ></SectionTitle>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Instructor</th>
                            <th>Class</th>
                            <th>Status</th>
                            <th>Feedback Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feedbacks.map(feedback => <tr key={feedback._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={feedback.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {feedback.instructor}

                                </td>
                                <td>{feedback.name} </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{feedback.status}</button>
                                </th>
                                <td>{feedback.feedback}</td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default GetFeedback;