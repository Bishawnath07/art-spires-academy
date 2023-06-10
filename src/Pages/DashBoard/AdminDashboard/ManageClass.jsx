import { useEffect, useState } from "react";
import ManageClassCard from "./ManageClassCard";


const ManageClass = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => setClasses(data))
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>

            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instructor name</th>
            <th>Instructor email</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Stutas</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            classes.map((item) => 
              <ManageClassCard
              key={item._id}
              item={item}
              ></ManageClassCard>
            )
          }
        </tbody>


      </table>
    </div>
  );
};

export default ManageClass;