import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const SelectedClass = () => {
    const [classes, setClasses] = useState([])
    const total = classes.reduce((sum, item) => item.price + sum, 0);
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
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold text-sky-800 ">You Added {classes.length} classes.</h2>
                <p className="text-md font-bold text-sky-800">Total: ${ total}</p>
                <Link to='/dashboard/payment'><button className="btn btn-primary btn-xs">PAY</button></Link>
            </div>
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