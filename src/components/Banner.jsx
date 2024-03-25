import { NavLink } from "react-router-dom";
import banner from "../assets/images/banner.png";
const Banner = () => {
  return (
    <main className="flex items-center justify-center rounded-2xl shadow-lg bg-[#1313130D] p-4 mt-12">
      <div className="basis-3/6">
        <p className="text-4xl font-extrabold">
          Books have the power to transport us to new worlds,
          challenge our perspectives.{" "}
        </p>
        <NavLink to="" className="btn">
          View The List
        </NavLink>
      </div>
      <div>
        <img src={banner} alt={banner} />
      </div>
    </main>
  );
};

export default Banner;
