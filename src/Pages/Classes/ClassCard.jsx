import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useClasses from "../../Hooks/useClasses";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const ClassCard = ({item}) => {
    const {user} = useContext(AuthContext)
    const {_id, image , name , instructor  ,  seats , price} =item;
    const [, refetch] = useClasses();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, instructor , seats , email: user.email}
            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="instuctor" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                {name} Class
            </h2>
            <p className="font-semibold">Teacher :  {instructor}</p>
            <div className="card-actions justify-start">
                <button className="badge badge-outline">Available Seats: {seats}</button>
                <button className="badge badge-outline">Pice: {price}</button>
                {
                    user ?  <button  onClick={() => handleAddToCart(item)} className="badge badge-outline ml-8 btn-outline btn-primary">Select</button> : <button className="badge badge-outline ml-20 disabled">Select</button>
                }
            </div>
        </div>
    </div>
    );
};

export default ClassCard;