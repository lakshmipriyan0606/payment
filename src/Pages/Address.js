import { useState } from "react";

const Address = ({ onNext }) => {
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [errors, setErrors] = useState({});
  
     const validateForm  = () => {
        const newErrors = {};

    if (address.trim() === "") {
      newErrors.address = "Address is required";
    }
    if (city.trim() === "") {
      newErrors.city = "City is required";
    }
    if (state.trim() === "") {
      newErrors.state = "State is required";
    }
    if (pincode === "") {
      newErrors.pincode = "Pincode is required";
    }

    setErrors(newErrors);
    return newErrors;
  };
   

     const handleNext = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
          onNext({ address , city , state , pincode });
        }
      };
  
    return (
      <div>
        <h1 className="text-gray-200 text-2xl pb-9 text-center font-semibold">Address</h1>
         <div className="grid grid-cols-1 gap-6 content-center h-[500px]   my-6">
         <input
          type="text"
          placeholder=" Enter Address(House No , Building ,street) "
          value={address}
           className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
          onChange={(e) => setAddress(e.target.value)}
        />
         {errors.address && <p  className="text-red-700 text-lg font-semibold  ">{errors.address}</p>}
        <input
          type="text"
          placeholder=" Enter State"
          value={state}
           className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
          onChange={(e) => setState(e.target.value)}
        />
         {errors.state && <p  className="text-red-700 text-lg font-semibold  ">{errors.state}</p>}
        <input
          type="text"
          placeholder=" Enter City"
          value={city}
           className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
          onChange={(e) => setCity(e.target.value)}
        />
         {errors.city && <p  className="text-red-700 text-lg font-semibold  ">{errors.city}</p>}
        <input
          type="text"
          placeholder=" Enter Pincode"
          value={pincode}
        className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
          onChange={(e) => setPincode(e.target.value)}
        />
         {errors.pincode && <p  className="text-red-700 text-lg font-semibold  ">{errors.pincode}</p>}
        <button className="bg-gray-900 text-white p-2 text-lg  hover:bg-gray-700 transition-all duration-500  rounded-xl " onClick={handleNext}>Next</button>
         </div>
      </div>
    );
  };

  export default Address