
const InstructorsCard = ({instructor}) => {
    const { name  , email, image } = instructor;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="instuctor" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>{email}</p>
                <div className="card-actions justify-end">
                    <button className="badge badge-outline">Details</button>
                    
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;