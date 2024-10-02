import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

const AuthenticatedLayout = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full h-dvh flex">
      <Sidebar opened={opened} close={() => setOpened(false)} />
      <div className="ml-0 md:ml-[323px] w-full ">
        <Navbar open={() => setOpened(true)} />
        <div className="mt-[83px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
