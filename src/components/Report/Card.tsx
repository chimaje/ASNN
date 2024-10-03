import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
const Card = ({
  card,
}: {
  card: {
    name: string;
    value: string;
    icon: JSX.Element;
    color: string;
  };
}) => {
  return (
    <div className="bg-white w-full  shadow-sm rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-xl">{card.name}</p>
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none outline-none">
              <div className="cursor-pointer flex gap-1 items-center h-full">
                <p>This Month</p>
                <MdKeyboardArrowDown size={18} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-80 p-4">
              <DropdownMenuLabel className="font-semibold text-slate-500">
                PERIOD
              </DropdownMenuLabel>
              <DropdownMenuItem className="mt-6">All</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Today</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>This Week</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div
          className="w-12 h-12 rounded-full flex justify-center items-center"
          style={{ backgroundColor: card.color }}
        >
          {card.icon}
        </div>
      </div>
      <hr
        className="my-4 border-none h-[1px]"
        style={{ backgroundColor: card.color }}
      />

      <p className="font-bold text-3xl mt-5">{card.value}</p>
    </div>
  );
};

export default Card;
