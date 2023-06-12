import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";
import SectionTitle from "../../Components/SectionTitle";

const Instructors = () => {
    const [instructors , setInstructors] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/instructorusers')
        .then(res => res.json())
        .then(data => setInstructors(data))
    }, []);
    return (
        <>
        <SectionTitle
                subHeading={"OUR INSTRUCTOR"}
                heading={"Meet Our Instructor"}
            ></SectionTitle>
        <div className="grid md:grid-cols-3  gap-10">
            {
                instructors.map(instructorDetails=> <InstructorsCard
                    key={instructorDetails._id}
                    instructorDetails={instructorDetails}
                    ></InstructorsCard>) 
                }
        </div>
                </>
    );
};

export default Instructors;
