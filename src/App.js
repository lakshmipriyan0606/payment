import MultiPageFormApp from "./Pages/MultiPagesForm";
import bgImg from "./Assests/img/bg1.webp"


function App() {
  return (
    <div className="bg-cover bg-center h-[100vh]  relative"  style={{backgroundImage:`url(${bgImg})`}}>
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-50"></div>
       <div className="absolute lg:w-[400px] xl:w-[420px] lg:h-[600px] xl:h-[600px] rounded-xl top-[12%] left-[40%] p-6 m-3 mx-auto shadow-2xl shadow-black bg-[#142445] bg-opacity-40">
       <MultiPageFormApp />
       </div>
    </div>
  );
}

export default App;
