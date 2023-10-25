import { useState } from "react";

const PaymentDetails = ({ onNext }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [bank, setBank] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (cardNumber.trim() === "") {
      newErrors.cardNumber = "Card Number is required";
    }
    if (bank.trim() === "") {
      newErrors.bank = "BankName is required";
    }
    setErrors(newErrors);
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onNext({ cardNumber , bank});
    }
  };

  return (
    <div className="">
      <h1 className="text-gray-200 text-2xl pb-9 text-center font-semibold">
        Payment Details
      </h1>
      <div className="grid grid-cols-1 gap-6     my-6">
        <input
          type="text"
          className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg "
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
         {errors.cardNumber && <p  className="text-red-600 text-lg font-semibold  ">{errors.cardNumber}</p>}
        <input
          type="text"
          className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
          placeholder="Enter Bank  Name"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
         {errors.bank && <p  className="text-red-600 text-lg font-semibold  ">{errors.bank}</p>}
        <button
          onClick={handleNext}
          className="bg-gray-900 text-white p-2 text-lg  hover:bg-gray-700 transition-all duration-500  rounded-xl "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
