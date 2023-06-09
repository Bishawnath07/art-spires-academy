import { useEffect, useState } from "react";


const ManageClass = () => {
  const [classes, setClasses] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/instructors')
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
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            classes.map((item) => 
              <tr key={item._id}>

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
                <td>{item.instructor}</td>
                <td>{item.email}</td>
                <td>{item.seats}</td>
                <td>{item.price}</td>
                <th className="space-x-2">
                  <button className="btn btn-primary btn-xs">pending</button>
                  <button className="btn btn-warning btn-xs">approved</button>
                  <button className="btn btn-xs">denied</button>
                </th>
              </tr>
            )
          }
        </tbody>


      </table>
    </div>
  );
};

export default ManageClass;