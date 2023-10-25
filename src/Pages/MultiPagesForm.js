import Address from "./Address";
import PersonDetail from "./PersonDetail";
import { useState } from "react";
import PaymentDetails from "./PaymentDetails";
import Result from "./Result";


const MultiPageFormApp = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
  
    const handleNext = (data) => {
      setStep(step + 1);
      setFormData({ ...formData, ...data });
    };
  
    switch (step) {
      case 1:
        return <PersonDetail onNext={handleNext} />;
      case 2:
        return <Address onNext={handleNext} />;
      case 3:
        return <PaymentDetails onNext={handleNext} />;
      case 4:
        return <Result data={formData} />;
      default:
        return null;
    }
  };
  
  export default MultiPageFormApp;