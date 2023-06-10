import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";
import SectionTitle from "../../Components/SectionTitle";

const Instructors = () => {
    const [instructors , setInstructors] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);
    return (
        <>
        <SectionTitle
                subHeading={"OUR TEACHERS"}
                heading={"Meet Our Teachers"}
            ></SectionTitle>
        <div className="grid md:grid-cols-3  gap-5">
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
