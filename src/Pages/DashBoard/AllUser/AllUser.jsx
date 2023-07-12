import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: users=[], refetch} = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`https://art-spires-academy-server-bishawnath07.vercel.app/users/admin/${user._id}`,{
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
        fetch(`https://art-spires-academy-server-bishawnath07.vercel.app/users/instructor/${user._id}`,{
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
                        <th>Make Admin</th>
                        <th>Make Instructor</th>
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