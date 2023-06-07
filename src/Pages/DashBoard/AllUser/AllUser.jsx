import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
    const {data: users=[], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now !`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        
    }
    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now !`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        
    }


    return (
        <div className="w-full">
        
        <h3 className="text-2xl font-semibold my-3">Now Users Avaiable : {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name} </td>
                            <td>{user.email}</td>
                            <td>{ user.role === 'admin' ? 'admin' :
                            
                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-amber-500  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                            <td>{ user.role === 'instructor' ? 'instructor' :
                            
                            <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-amber-500  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                            
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUser;