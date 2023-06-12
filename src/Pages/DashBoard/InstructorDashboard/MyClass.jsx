import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";

const MyClass = () => {
    const [myclass, setMyclass] = useState([])
    useEffect(() => {
        fetch('https://art-spires-academy-server-bishawnath07.vercel.app/appreveclasses')
            .then(res => res.json())
            .then(data => setMyclass(data))
    }, []);
    return (

        <div className="w-full"> 
            <SectionTitle 
                subHeading={"ADD A CLASSES"}
                heading={"MY Classes"}
            ></SectionTitle>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myclass.map(item => <tr key={item._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td>
                                    {item.instructor}

                                </td>
                                <td><button className="btn  btn-sm">{item.status}</button></td>

                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClass;