import { useContext, useEffect ,useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle';
import { AuthContext } from '../../../Provider/AuthProvider';

const EnrollClass = () => {
    const {user} = useContext(AuthContext);
    const [enrollClass , setEnrollClass] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/succefulpay?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setEnrollClass(data))
    }, []);
    return (
        <div className='w-full '>
            <SectionTitle
                subHeading={"---At a Glance!---"}
                heading={"PAYMENT HISTORY"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>EMAIL</th>
                            <th>TOTAL PRICE</th>
                           
                            <th>PAYENT DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollClass.map((item , index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.email}</td>
                            <td>{item.price}</td>
                            
                            <td>{item.date} </td>
                          </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClass;