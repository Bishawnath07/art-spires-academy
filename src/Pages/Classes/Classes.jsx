import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import ClassCard from "./ClassCard";

const Classes = () => {
    const [classes ,setClasses] =useState([])
    useEffect( () =>{
        fetch('https://art-spires-academy-server-bishawnath07.vercel.app/appreveclasses')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, []);
    return (
        <div className="max-w-screen-xl">
        <SectionTitle
                subHeading={"POPULAR CLASSES"}
                heading={"Classes for Your Kids"}
            ></SectionTitle>
        <div className="grid md:grid-cols-3 mx-5 gap-5 ">
            {
                classes.map(item=> <ClassCard
                    key={item._id}
                    item={item}
                    ></ClassCard>) 
                }
        </div>
                </div>
    );
};

export default Classes;