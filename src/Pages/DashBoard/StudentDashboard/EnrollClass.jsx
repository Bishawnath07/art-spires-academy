import { useContext, useEffect ,useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle';
import { AuthContext } from '../../../Provider/AuthProvider';

const EnrollClass = () => {
    const {user} = useContext(AuthContext);
    const [enrollClass , setEnrollClass] = useState([])
    useEffect(() => {
        fetch(`https://art-spires-academy-server-bishawnath07.vercel.app/succefulpay?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setEnrollClass(data))
    }, []);
    return (
        <div className='w-full '>
            <SectionTitle
                subHeading={"---At a Glance!---"}
                heading={"ENROLL CLASS HISTORY"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-black bg-opacity-60 text-white'>
                            <th className='text-xl font-semibold'>#</th>
                            <th className='text-xl font-semibold'>EMAIL</th>
                            <th className='text-xl font-semibold'>Class Name</th>
                            <th className='text-xl font-semibold'>TOTAL PRICE</th>
                            <th className='text-xl font-semibold'>Payment Status</th>
                            <th className='text-xl font-semibold'>PAYENT DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollClass.map((item , index) => <tr key={item._id}>
                            <th className='text-md font-bold'>{index + 1}</th>
                            <td className='text-md font-bold'>{item.email}</td>
                            <td className='text-md font-bold'>{item.name}</td>
                            <td className='text-md font-bold'>{item.price}</td>
                            <td className='text-md font-bold text-sky-700'> Successed</td>
                            <td className='text-md font-bold'>{item.date} </td>
                          </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClass;