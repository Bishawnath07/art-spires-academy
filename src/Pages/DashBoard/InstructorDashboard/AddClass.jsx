import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const img_hosting_token = import.meta.env.VITE_IMGBB_TOKEN;

const AddClass = () => {
    const { register, handleSubmit, reset, setValue } = useForm();

    const { user } = useContext(AuthContext)

    useEffect(() => {
        const getUserInfo = async () => {
            if (user) {
                const { displayName } = user;
                setValue('instructor', displayName);
                setValue('email', user.email);
            }
        };

        getUserInfo();
    }, [setValue, user]);


    const [axiosSecure] = useAxiosSecure()
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, email, instructor, seats, price ,enrolled} = data;
                    const newItem = { name, email, enrolled , status: 'pending'  , price: parseFloat(price), instructor, seats, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };


    return (
        <div className="w-full px-10">
            <SectionTitle
                subHeading={"ADD A CLASSES"}
                heading={"You Can Add Classes"}
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-4 gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Student Enrolled*</span>
                        </label>
                        <input type="text" placeholder="00"  
                            {...register("enrolled", { maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Name*</span>
                        </label>
                        <input type="text" {...register("instructor", { required: true })} placeholder="Type Instructor name" className="input input-bordered w-full " readOnly />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Type Instructor email" className="input input-bordered w-full " readOnly />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available seats*</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Available seats" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>


                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;