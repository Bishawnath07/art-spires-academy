import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";
import SectionTitle from "../../Components/SectionTitle";

const Instructors = () => {
    const [instructors , setInstructors] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => setInstructors(data))
    }, []);
    return (
        <>
        <SectionTitle
                subHeading={"OUR TEACHERS"}
                heading={"Meet Our Teachers"}
            ></SectionTitle>
        <div className="grid md:grid-cols-3  gap-5">
            {
                instructors.map(instructor=> <InstructorsCard
                    key={instructor._id}
                    instructor={instructor}
                    ></InstructorsCard>) 
                }
        </div>
                </>
    );
};

export default Instructors;
