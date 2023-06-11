import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useClasses from "../../Hooks/useClasses";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const ClassCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const [isAdmin] =useAdmin();
    const [isInstructor] =useInstructor();
    
    const { _id, image, name, instructor, enrolled, seats, price } = item;
    
    const [, refetch] = useClasses();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, instructor, seats, email: user.email }
            console.log( cartItem)
            fetch('http://localhost:5000/selectclasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
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
        else {
            Swal.fire({
                title: 'Please login ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    const isEnrollButtonDisabled = user && (user.role === "admin" || user.role === "instructor");
    const sit = seats;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="instuctor" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name} Class
                </h2>
                <p className="font-semibold">Teacher :  {instructor}</p>
                <div className="card-actions gap-5 justify-start">
                    <button className="badge badge-outline"> Seats: {seats}</button>
                    <button className="badge badge-outline"> Enrolled : {enrolled} </button>
                    <button className="badge badge-outline">Pice: {price}</button>

                </div>

                <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-primary btn-outline btn-sm mt-4"
                    disabled={isAdmin || isInstructor || sit == 0}
                   
                >
                    {isEnrollButtonDisabled ? "Button Disabled" : "Enroll Now"}
                </button>
            </div>
        </div>
    );
};

export default ClassCard;
