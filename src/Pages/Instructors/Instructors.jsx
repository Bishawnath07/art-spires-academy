import { useEffect, useState } from "react";
import InstructorsCard from "./InstructorsCard";
import SectionTitle from "../../Components/SectionTitle";

const Instructors = () => {
    const [instructors , setInstructors] = useState([])

    useEffect( () =>{
        fetch('https://art-spires-academy-server-bishawnath07.vercel.app/instructorusers')
        .then(res => res.json())
        .then(data => setInstructors(data))
    }, []);
    return (
       <div className="mt-20 mx-4">
         
        <SectionTitle
                subHeading={"OUR INSTRUCTOR"}
                heading={"Meet Our Instructor"}
            ></SectionTitle>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 md:mx-0 mx-10 mt-10 gap-10">
            {
                instructors.map(instructorDetails=> <InstructorsCard
                    key={instructorDetails._id}
                    instructorDetails={instructorDetails}
                    ></InstructorsCard>) 
                }
        </div>
               
       </div>
    );
};

export default Instructors;
