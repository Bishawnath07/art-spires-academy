import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const SelectedRow = ({item , index , handleDelete}) => {
    const {_id , instructor , email , name  , price} = item;
    return (
        <tr key={item._id}>
        <th>{index + 1}</th>
        <td>{instructor}</td>
        <td>{email}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td><Link to={`/dashboard/payment/${_id}`}><button className="btn btn-primary btn-xs">pay</button></Link></td>
        <td>
            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
        </td>
    </tr>
    );
};

export default SelectedRow;