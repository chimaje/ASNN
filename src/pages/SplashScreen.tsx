import { Button } from "@/components/ui/button";
import logo from "../assets/svgs/logo.svg";
import { NavLink } from "react-router-dom";
import { PUBLIC_PATHS } from "@/constants/routes";
const SplashScreen = () => {
  return (
    <div
      className={`w-full h-dvh flex justify-center items-center bg-splash-pattern  bg-no-repeat bg-cover px-5 md:px-0`}
    >
      <div className="w-auto  flex flex-col gap-5 items-center">
        <img src={logo} alt="Cupin Logo" className="" />
        <NavLink to={PUBLIC_PATHS.LOGIN} className="w-full">
          <Button className="w-full" size="lg">
            Login
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default SplashScreen;
