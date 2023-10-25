
import React, { useState } from "react";

const PersonDetail = ({onNext}) => {
    
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (firstName.trim() === "") {
      newErrors.firstName = "FirstName is required";
    }
    if (lastName.trim() === "") {
      newErrors.lastName = "LastName is required";
    }
    if (mobile === "") {
      newErrors.mobile = "Mobile Number is required";
    }
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = "Invalid email address";
    }
    setErrors(newErrors);
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onNext({ firstName,  lastName ,  email , mobile });
    }
  };


  return (
        <div>
          <h1 className="text-gray-200 text-2xl pb-3 text-center font-semibold">Personal Details</h1>
           <div className="grid grid-cols-1 gap-6 content-center h-[500px]   my-6">
           <input
            type="text"
            placeholder=" Enter FirstName"
            value={firstName}
            className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p  className="text-red-700 text-lg font-semibold  ">{errors.firstName}</p>}
          <input
            type="text"
            placeholder="Enter LastName"
            value={lastName}
            className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="text-red-700 text-lg font-semibold  ">{errors.lastName}</p>}
          <input
            type="text"
            placeholder=" Enter Email"
            value={email}
            className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p  className="text-red-700 text-lg font-semibold  ">{errors.email}</p>}
          <input
            type="number"
            placeholder="Enter Mobile Number"
            value={mobile < 0 ? 0  : mobile }
            className="p-3 bg-gray-900 bg-opacity-80 rounded-lg text-gray-200 outline-none text-lg"
            onChange={(e) => setMobile(e.target.value)}
          />
          {errors.mobile && <p  className="text-red-700 text-lg font-semibold  ">{errors.mobile}</p>}
          <button onClick={handleNext} className="bg-gray-900 text-white p-2 text-lg  hover:bg-gray-700 transition-all duration-500  rounded-xl ">Next</button>
           </div>
        </div>
      );
 };

export default PersonDetail