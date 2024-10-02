import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MdKeyboardArrowDown,
  MdLockOutline,
  MdLogin,
  MdNotifications,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { navItems } from "@/constants/navItems";

const Navbar = ({ open }: { open: () => void }) => {
  const location = useLocation();
  const active = navItems.find((item) => item.path === location.pathname);
  return (
    <div className="w-full md:w-[calc(100%-323px)] h-[83px] top-0 fixed left-0 md:left-[323px] border z-[10] bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 md:px-10 ">
        <p className="font-bold text-2xl text-primary">{active?.name}</p>

        <GiHamburgerMenu
          className="cursor-pointer block md:hidden"
          size={28}
          onClick={open}
        />

        <div className=" gap-4 items-center hidden md:flex">
          <div className="hidden md:block">
            <Input placeholder="Search" className="bg-gray-200 w-60" />
          </div>
          <MdNotifications size={28} className="cursor-pointer" />
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none outline-none">
              <div className="cursor-pointer flex gap-2 items-center h-full">
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
                  <p className="font-semibold">Oyelola Adeboye</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-4">
                <MdLockOutline size={20} />
                <span className="font-medium">Change Password</span>
              </DropdownMenuItem>
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
    </div>
  );
};

export default Navbar;
