import CountdownTimer from "./CountdownTimer";

const LiveClass = () => {
    return (
        <div className="mt-20">
            <h2 className="text-[26px] md:text-4xl font-bold my-10 text-center">Join Our Live Class</h2>
           <div className="bg-red-50 text-black text-center p-10">
            <h3 className="text-[20px] md:text-2xl font-semibold mb-5">Meeting starts in:</h3>
            <CountdownTimer></CountdownTimer>
           </div>
           <div className="mt-10 mx-8 md:mx-0">
            <h1 className="text-[20px] md:text-4xl font-semibold my-5">First Meeting</h1>
            <p><span className="font-semibold">Start Time</span>: Friday, Mar 29, 2024 03:43 AM</p>
            <p className="text-[14px] md:text-[18px] ">Timezone: UTC</p>
            <p className="text-[14px] md:text-[18px] ">Password: 6414</p>
            <button className="btn btn-success my-4">Join via Browser</button>
           </div>
        </div>
    );
};

export default LiveClass;