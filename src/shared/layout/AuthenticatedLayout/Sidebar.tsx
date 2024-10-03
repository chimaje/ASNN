import logo from "../../../assets/svgs/logo_white.svg";
import { navItems } from "@/constants/navItems";
import { SidebarItems } from "./SidebarItems";
import { IoCloseSharp } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdKeyboardArrowDown, MdLockOutline, MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { PRIVATE_PATHS } from "@/constants/routes";

const Sidebar = ({ opened, close }: { opened: boolean; close: () => void }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`w-full md:w-[323px] bg-black  h-dvh overflow-y-auto pt-10 px-4 fixed top-0 left-0 z-20 ${
        opened ? "block" : "hidden"
      } md:block`}
    >
      <div className="flex w-full justify-between items-center mb-20">
        <img src={logo} alt="Cupin Logo" className="" />

        <IoCloseSharp
          size={28}
          color="white"
          className="cursor-pointer block md:hidden"
          onClick={close}
        />
      </div>
      <div className="flex flex-col justify-between h-[calc(100dvh-250px)]">
        <div>
          {navItems
            .filter((v) => !v.bottom)
            .map((item) => (
              <SidebarItems nav={item} close={close} key={item.name} />
            ))}
        </div>
        <div>
          {navItems
            .filter((v) => v.bottom)
            .map((item) => (
              <SidebarItems
                key={item.name}
                nav={{
                  ...item,
                  customFn: () => {
                    navigate("/");
                  },
                }}
                close={close}
              />
            ))}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="border-none outline-none block md:hidden">
            <div className="cursor-pointer flex gap-2 items-center justify-center h-full">
              <Avatar className="border-primary border-2">
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <MdKeyboardArrowDown size={18} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="mb-4">
              <div className="cursor-pointer flex gap-2 items-center h-full">
                <Avatar className="border-primary border-2">
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="font-semibold ">Oyelola Adeboye</p>
              </div>
            </DropdownMenuItem>
            <NavLink
              onClick={close}
              to={PRIVATE_PATHS.CHANGE_PASSWORD}
              className="cursor-pointer"
            >
              <DropdownMenuItem className="gap-4">
                <MdLockOutline size={20} />
                <span className="font-medium">Change Password</span>
              </DropdownMenuItem>
            </NavLink>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-4">
              <FaRegUser size={20} />
              <span className="font-medium">Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-4">
              <MdLogin color="red" size={20} />
              <span className="font-medium">Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Sidebar;
