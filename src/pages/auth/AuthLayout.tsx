import logo from "../../assets/svgs/logo_white.svg";
import logoDark from "../../assets/svgs/logo.svg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2  h-dvh">
      <div className="bg-auth-pattern-dark bg-no-repeat bg-cover w-full h-full pl-10 pt-10 hidden md:block">
        <img src={logo} alt="Cupin Logo" className="" />
        <p className="font-semibold text-2xl text-white w-7/12 mt-4">
          Track and manage all educational fees in one place with real-time
          updates to make education more accessible.
        </p>
      </div>
      <div className="w-full min-h-full flex justify-center items-center px-5 md:px-0 overflow-y-auto ">
        <div className="md:w-[70%] mt-20 py-10">
          <div className="w-full md:hidden flex justify-center">
            <img src={logoDark} alt="Cupin Logo" className="w-1/2 mb-5 " />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
