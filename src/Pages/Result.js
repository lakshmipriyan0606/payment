import { useState } from "react";

const Result = ({ data }) => {

  const [check , setCheck] = useState(false)
  function handleCheck() {
    setCheck(!check)
  }
 function handleNext () {
   if(check === false) {
    alert("confirm your data")
   }
   else{
    alert("Successful  ")
   }
 }

  return (
    <div>
      <h1 className="text-gray-200 text-2xl pb-9 text-center font-semibold">
        Result <span className="font-semibold text-gray-50"></span>
      </h1>
      <div className="grid grid-cols-1 gap-5 ">
        <p className="text-center text-[#7F667F]  font-semibold  text-xl flex  justify-around ">
          First Name :{" "}
          <span className="font-semibold text-gray-50">{data.firstName}</span>
        </p>
        <p className="text-center  font-semibold text-xl flex  justify-around text-[#7F667F] ">
          Last Name:{" "}
          <span className="font-semibold text-gray-50"> {data.lastName}</span>
        </p>
        <p className="text-center  font-semibold text-xl flex  justify-around text-[#7F667F] ">
          Mobile Number:{" "}
          <span className="font-semibold text-gray-50">{data.mobile}</span>
        </p>
        <p className="text-center  font-semibold text-xl flex  justify-around text-[#7F667F] ">
          Email:{" "}
          <span className="font-semibold text-gray-50"> {data.email} </span>
        </p>
        <p className="text-center  font-semibold text-xl flex  justify-around text-[#7F667F] ">
          Address:{" "}
          <span className="font-semibold text-gray-50">{data.address} </span>{" "}
        </p>
        <p className="text-center  font-semibold text-xl flex  justify-around text-[#7F667F] ">
          City: <span className="font-semibold text-gray-50">{data.city} </span>
        </p>
        <p className="text-center  font-semibold text-xl flex  justify-around text-[#7F667F] ">
          State:{" "}
          <span className="font-semibold text-gray-50">{data.state} </span>{" "}
        </p>
        <p className="text-center  font-semibold text-xl flex  justify-around text-[#7F667F] ">
          Card Number:{" "}
          <span className="font-semibold text-gray-50">
            {" "}
            {data.cardNumber}{" "}
          </span>
        </p>
        <p className="text-center  font-semibold text-xl flex  justify-around text-[#7F667F] ">
          Bank Name:{" "}
          <span className="font-semibold text-gray-50"> {data.bank} </span>
        </p>
        <div class="flex items-center justify-center py-4 mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value={check}
            onChange={handleCheck}
            checked={check}
            class="w-5 h-5 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-xl  font-medium text-gray-900 dark:text-gray-300"
          >
            Confirm Your Data
          </label>
        </div>
        <button onClick={handleNext} className="bg-gray-900 text-white p-2 text-lg  hover:bg-gray-700 transition-all duration-500  rounded-xl ">Next</button>
      </div>
    </div>
  );
};

export default Result;
