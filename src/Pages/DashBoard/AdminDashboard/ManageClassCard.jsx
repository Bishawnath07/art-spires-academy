import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ManageClassCard = ({ item }) => {
    const { _id , name, image, price , instructor , seats , enrolled} = item;
    const { user } = useContext(AuthContext)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    
    useEffect(() => {
        const storedDisabledState = localStorage.getItem(`isButtonDisabled_${item._id}`);
        if (storedDisabledState) {
          setIsButtonDisabled(JSON.parse(storedDisabledState));
        }
      }, []);

    const approveClass = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { name, image, instructor , seats ,enrolled, status:'approve' ,  price, email: user.email }
            fetch('https://art-spires-academy-server-bishawnath07.vercel.app/approveclasses', {
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
                            title: ' Added Class on the Class Page.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // Update the item status
                        item.status = 'approved';
                        setIsButtonDisabled(true);
                        localStorage.setItem(`isButtonDisabled_${item._id}`, JSON.stringify(true));

                    }
                })
        }

    }
    const deniedClass = item => {
        console.log(item);
        if (user && user.email) {
            fetch('https://art-spires-academy-server-bishawnath07.vercel.app/selectclass', {
                method: 'DELETE',
                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: '  You Denied Class Successfully!.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // Update the item status
                        item.status = 'Denied';
                        setIsButtonDisabled(true);
                        localStorage.setItem(`isButtonDisabled_${item._id}`, JSON.stringify(true));

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
            <td>{item.name}</td>
            <td>{item.instructor}</td>
            <td>{item.email}</td>
            <td>{item.seats}</td>
            <td>{item.price}</td>
            <td>{isButtonDisabled && "approved" ||  item.status}</td>
            <th className="space-y-2 flex flex-col">
                <button onClick={() => approveClass(item)} className="btn btn-primary btn-xs" disabled={isButtonDisabled}>approved</button>
                <button onClick={() => deniedClass(item)} className="btn btn-warning btn-xs" disabled={isButtonDisabled}>denied</button>
                <Link to={`/dashboard/feedback/${_id}`}> <button className="btn btn-accent btn-xs">feedback</button></Link>
            </th>
        </tr>
    );
};

export default ManageClassCard;