import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../Components/SectionTitle";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);
const Payment = () => {
    const classes =useLoaderData();
    console.log(classes)
    const total = classes.price;
    console.log('total amount' ,total)
    
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