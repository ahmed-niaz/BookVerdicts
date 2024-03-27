import { NavLink } from "react-router-dom";
import banner from "../assets/images/banner.png";
const Banner = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-center rounded-2xl shadow-lg bg-[#1313130D] p-4 mt-12">
      <div className="basis-3/6">
        <p className="text-xl lg:text-4xl font-bold lg:font-extrabold text-center lg:text-start">
          Books have the power to transport us to new worlds,
          challenge our perspectives.{" "}
        </p>
       <div className="flex items-center justify-center lg:justify-start">
       <NavLink to="/booklist" className="btn flex items-center   w-1/2 lg:w-[216px]  bg-[#76c893] text-white border-none mt-4 hover:bg-[#22be0a14] hover:text-[#76c893]">
          View The List
        </NavLink>
       </div>
      </div>
      <div className="mb-8 lg:mb-0">
        <img className="w-3/4 lg:w-full  mx-auto" src={banner} alt={banner} />
      </div>
    </main>
  );
};

export default Banner;
