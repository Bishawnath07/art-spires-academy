import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "../../Provider/AuthProvider";
import SelectedRow from "./SelectedRow";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const SelectedClass = () => {
    const [classes, setClasses] = useState([])
    const {user} = useContext(AuthContext)
    const [axiosSecure]= useAxiosSecure()
    
    const total = classes.reduce((sum, item) => item.price + sum, 0);
    const url = `https://art-spires-academy-server-bishawnath07.vercel.app/selectstudent?email=${user.email}`
    useEffect(() => {
        fetch(url)
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
                axiosSecure.delete(`selectclass/${item._id}`)
                    
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {

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
                        classes.map((item, index) => <SelectedRow
                        key={item._id}
                        index={index}
                        item={item}
                        handleDelete={handleDelete}
                        ></SelectedRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClass;