import { Button } from "@/components/ui/button";
import { MdChevronRight, MdOutlineRemoveRedEye } from "react-icons/md";
import { ColumnDef, Row } from "@tanstack/react-table";
import { DataTable } from "../ui/data-table";
import { getStatusColor } from "@/lib/utils";
import { activities, Activities } from "./colums";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PRIVATE_PATHS } from "@/constants/routes";
const columns: ColumnDef<Activities>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => (
      <p className="font-bold text-gray-500">{row.original.fullName}</p>
    ),
  },

  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "brand",
    header: "Car Type",
  },
  {
    accessorKey: "model",
    header: "Car Model",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <span style={{ color: getStatusColor(row.original.status) }}>
          {row.original.status}
        </span>
      );
    },
  },
  {
    header: "Action",
    cell: () => {
      return <MdOutlineRemoveRedEye size={24} className="text-primary" />;
    },
  },
];
const ActivitiesTable = ({ type }: { type: string }) => {
  const [, setRowSelection] = useState<Row<Activities>[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between w-full mb-5 ">
        <p className="font-bold text-2xl">{type} Actions</p>
        {type === "Recent" && (
          <NavLink to={PRIVATE_PATHS.REPORTS}>
            <Button className="w-full md:w-auto gap-2 text-black bg-gray-200 hover:bg-gray-100">
              View All <MdChevronRight />
            </Button>
          </NavLink>
        )}
      </div>
      <DataTable
        page={pageIndex}
        setPage={setPageIndex}
        setPageSize={setPageSize}
        pageSize={pageSize}
        columns={columns}
        data={activities}
        onRowValuesChecked={(data) => setRowSelection(data)}
      />
    </div>
  );
};

export default ActivitiesTable;
