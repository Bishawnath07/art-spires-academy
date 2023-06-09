import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";


const SelectedClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/selectclass')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectclass/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                          
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = classes.filter(cof => cof._id !== item._id);
                            setClasses(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Instructor</th>
                        <th>Email</th>
                        <th>Class Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.instructor}</td>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClass;