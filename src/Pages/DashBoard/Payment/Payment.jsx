import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../Components/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);
const Payment = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/selectclass')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    const total = classes.reduce((sum , item) => sum + item.price , 0);
    
    return (
        <div>
            <SectionTitle subHeading='please procced' heading='Payment'></SectionTitle>
            <h3>payment</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={total} cart={classes}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;