import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MakeInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: users=[]} = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    
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
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name} </td>
                            <td>{user.email}</td>
                           
                            
                            
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MakeInstructor;