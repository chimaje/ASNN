// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// // import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
// import { MdKeyboardArrowDown } from "react-icons/md";
const Card = ({
  card,
}: {
  card: {
    name: string;
    description: string;
    icon: JSX.Element;
    color: string;
    rate:JSX.Element;
    progress:string;
  };
}) => {
  return (
    <div className="w-full p-10 ">
      <div className="flex   justify-between items-center mx-4">
          <div className="relative flex items-center mx-4">
          <div className="h-20 w-[2px] bg-gray-200"></div>
          </div>
        <div>
          <div className="flex flex-row items-baseline justify-between">
              <p className="font-semibold text-xl">{card.name}</p>
              <div
              className="w-12 h-12 rounded-full flex justify-center items-center "
              style={{ backgroundColor: card.color }}
            >
                {card.icon}
            </div>
          </div>
          <p>{card.description}</p>
          <div className="flex flex-row">
            {card.rate}
          <p>{card.progress}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
