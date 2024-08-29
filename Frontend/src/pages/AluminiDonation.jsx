import { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';


const AluminiDonation = () => {

    const [amount, setAmount] = useState(0);
  const [donatedescription, setDonateddesc] = useState("");

    // payment integration
    const makePayment = async()=>{
        const stripe = await loadStripe("pk_test_51PrkOXCL8GJ43t3V1rnnfOq3c2hiwuGrRBnh5ernxKg223MVEJIo5q5Saja6JqCIPyWXEmIF6C5fkcws2lrsSpgW00OqUZMuCw");

        const body = {
            amount: amount,
            desc:donatedescription,
        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch("http://localhost:7000/api/create-checkout-session",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
        
        if(result.error){
            console.log(result.error);
        }
    }


    return (
        <>
            <div className='bg-[#E6D8C6]'>
      <div className="container mx-auto py-12 px-4 ">
        <h2 className="text-3xl font-bold text-center mb-8">Support Our Alumni Community</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Your donation will help us continue to provide valuable resources and support to our alumni. From career development workshops to networking events, your contribution makes a real difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Recent Graduate</h3>
            <span className="text-4xl font-bold text-[#D4B992]">$50</span>
            <p className="text-gray-600 mt-4">Help support our newest alumni.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Alumni</h3>
            <span className="text-4xl font-bold text-[#D4B992]">$100</span>
            <p className="text-gray-600 mt-4">Your support helps us continue our mission.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Lifetime Member</h3>
            <span className="text-4xl font-bold text-[#D4B992]">$500</span>
            <p className="text-gray-600 mt-4">Make a lasting impact on our community.</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Custom Donation</h3>
          <div className="mb-4">
            <label htmlFor="donationAmount" className="block text-gray-700 font-bold mb-2">
              Donation Amount
            </label>
            <input
              type="number"
              id="donationAmount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={amount}
              onChange={(event) => {
                setAmount(event.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message (optional)
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={donatedescription}
              onChange={(event) => {
                setDonateddesc(event.target.value);
              }}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center" onClick={makePayment}>
            Donate Now
          </button>
        </div>
      </div>
    </div>
        </>
    )
}

export default AluminiDonation


