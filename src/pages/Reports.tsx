import ActivitiesTable from "@/components/Dashboard/ActivitiesTable";
import Card from "@/components/Dashboard/Card";
import { FaCheckCircle } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";
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
const Reports = () => {
  return (
    <div className=" pt-10 px-5 md:px-10 w-full min-h-[calc(100dvh-83px)] bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-8 mb-20">
        {cardItems.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
      <ActivitiesTable type="All" />
    </div>
  );
};

export default Reports;
