import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import PopularClassCard from "./PopularClassCard";

const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([])
    useEffect(() => {
      fetch('https://art-spires-academy-server-bishawnath07.vercel.app/popolarclass')
        .then(res => res.json())
        .then(data => setPopularClass(data))
    }, []);
    return (
        <div className="mt-20">
            <SectionTitle
                subHeading={"POPULAR CLASSES"}
                heading={"Available Classes for Your Kids"}
            ></SectionTitle>
          <div className="grid grid-cols-1 mx-10 md:mx-0 my-10 md:grid-cols-3 gap-10">
          {
            popularClass.map(pclass => <PopularClassCard
            key={pclass._id}
            pclass={pclass}
            ></PopularClassCard>)
           }
          </div>
        </div>
    );
};

export default PopularClass;