import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext  ,useState} from "react";



const ManageClassCard = ({ item }) => {
    const {  name, image, price } = item;
    const { user } = useContext(AuthContext)
    const [isButtonDisabled, setIsButtonDisabled]  =useState(false)

    const approveClass = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {  name, image, price, email: user.email }
            fetch('http://localhost:5000/approveclasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setIsButtonDisabled(true);
                    }
                })
        }

    }

    return (
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
            <td>{item.status}</td>
            <th className="space-y-2 flex flex-col">
                <button onClick={() => approveClass(item)} className="btn btn-primary btn-xs"   disabled={isButtonDisabled}>approved</button>
                <button className="btn btn-warning btn-xs">denied</button>
                <button className="btn btn-accent btn-xs">feedback</button>
            </th>
        </tr>
    );
};

export default ManageClassCard;