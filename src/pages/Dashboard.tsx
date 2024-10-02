import Card from "@/components/Dashboard/Card";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";
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
    name: "Successful",
    value: "1,005",
    icon: <FaCheckCircle size={23} color="#35CDA5" />,
    color: "#D8EFE9",
  },
  {
    name: "Unsuccessful",
    value: "2,000",
    icon: <FaTriangleExclamation size={23} color="#CD4435" />,
    color: "#EFD8D8",
  },
  {
    name: "Pin Generated",
    value: "1,300",
    icon: <FaTriangleExclamation size={23} color="#224191" />,
    color: "#D8E6EF",
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
              <MdAdd color="white" /> Generate Token
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

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-8 mb-20">
        {cardItems.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>

      <ActivitiesTable type="Recent" />
    </div>
  );
};

export default Dashboard;
