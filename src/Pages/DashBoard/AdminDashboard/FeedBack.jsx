// import { useContext } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const FeedBack = () => {
    const item = useLoaderData();
    console.log(item)
    // const {user} =useContext(AuthContext)

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const feedback = event.target.text.value;
        
    //     if (user && user.email) {
    //         const cartItem = { feedback  }
    //         console.log(cartItem)
            
    //         fetch('http://localhost:5000/feedback', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(cartItem)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.insertedId) {
    //                     // refetch cart to update the number of items in the cart
    //                     Swal.fire({
    //                         position: 'top-center',
    //                         icon: 'success',
    //                         title: ' Send Feedback Message for Instructor classes.',
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     })
                        
    //                 }
    //             })
    //     }
    // };

    return (
        <form >
            <div className="form-control w-[600px]">
                <label className="label">
                    <h2 className="label-text mb-4 text-xl font-semibold">Admin Message</h2>
                </label>
                <textarea name="text" className="textarea textarea-bordered h-24" placeholder="feedback message"></textarea>
            </div>
            <input className='btn btn-sm mt-4 btn-secondary' type="submit" value="Submit" />
        </form>

    );
};

export default FeedBack;
