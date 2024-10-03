import Card from "@/components/Dashboard/Card";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";
import { RiArrowGoForwardLine } from "react-icons/ri";
import { GoArrowUpRight , GoArrowDownLeft } from "react-icons/go";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GenerateSecurityNumberForm from "@/components/GenerateSecurity/GenerateSecurityNumberForm";
import { useState } from "react";
import ActivitiesTable from "@/components/Dashboard/ActivitiesTable";

const cardItems = [
  {
    name: "89,935",
    description: "Registered Vehicles",
    icon: <FaUserFriends size={23} color="#FFB415" />,
    color: "#FFFF",
    rate :<GoArrowUpRight size={20} color="#34C759"/>,
    progress:"+1.01% this week",
  },
  {
    name: "23,283",
    description: "Active Registrations",
    icon: <FaUserFriends size={23} color="#FFB415" />,
    color: "#FFFF",
    rate :<GoArrowUpRight size={20}  color="#34C759"/>,
    progress:"+0.49% this week",
  },
  {
    name: "46,827",
    description: "Expired Registration",
    icon: <LuCheckCircle  size={23} color="#FFB415" />,
    color: "#FFFF",
    rate :<GoArrowDownLeft size={20} color="#FF3B30"/>,
    progress:"-0.91% this week",
  },
  {
    name: "124,854",
    description: "Pin Generated",
    icon: <RiArrowGoForwardLine size={23} color="#FFB415" />,
    color: "#FFFF",
    rate :<GoArrowUpRight size={20}  color="#34C759"/>,
    progress:"+1.51% this week",
  },
];
const Dashboard = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className=" pt-10 px-5 md:px-10 w-full min-h-[calc(100dvh-83px)] bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between w-full mb-5 ">
        <div>
          <p className="text-3xl font-semibold">
            Welcome, <span className="text-primary">Boye</span>
          </p>
          <p className="font-medium">Check out latest updates</p>
        </div>
        <Dialog open={opened} onOpenChange={setOpened}>
          <DialogTrigger>
            <Button className="gap-2">
              <MdAdd color="white" /> Register Vehicle
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90dvh] md:min-w-[600px] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Personal Information</DialogTitle>
              <DialogDescription>
                Fill in your personal details.
              </DialogDescription>
            </DialogHeader>
            <GenerateSecurityNumberForm setOpened={setOpened} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-row h-40 bg-white  border-2 border-grey-500  mt-10  mb-20 rounded-2xl ">
        {cardItems.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>

      <ActivitiesTable type="Recent" />
    </div>
  );
};

export default Dashboard;
