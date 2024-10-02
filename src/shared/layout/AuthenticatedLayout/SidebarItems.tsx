import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
export const SidebarItems = ({
  nav,
  close,
}: {
  nav: {
    name: string;
    icon: IconType;
    path?: string;
    onClick?: (fun: () => void) => void;
    bottom?: boolean;
    customFn?: () => void;
  };
  close: () => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location.pathname === nav.path;
  const Icon = nav.icon;
  const click = () => {
    if (nav.customFn) {
      close();
      nav.customFn();
    }
  };
  const navigateHanler = () => {
    if (nav.path) {
      navigate(nav.path);
      close();
    }
  };
  return (
    <div
      onClick={() => (nav?.onClick ? nav?.onClick(click) : navigateHanler())}
      className={`flex gap-5 items-center ${
        active ? "bg-primary" : "bg-transparent"
      } p-3 rounded-md cursor-pointer hover:bg-primary mb-5`}
    >
      <Icon color="white" size={23} />
      <p className="text-white text-lg font-medium">{nav.name}</p>
    </div>
  );
};
