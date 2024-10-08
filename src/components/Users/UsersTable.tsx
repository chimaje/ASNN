import { useState } from "react";
import { DataTable } from "../ui/data-table";
import { ColumnDef, Row } from "@tanstack/react-table";
import { activities, Activities } from "./colums";
import { BsThreeDots } from "react-icons/bs";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { FaRegCircleStop } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

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
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "carType",
    header: "Car Type",
  },
  {
    accessorKey: "carBrand",
    header: "Car Brand",
  },
  {
    accessorKey: "email",
    header: "Email Address",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    header: "Action",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="border-none outline-none">
            <BsThreeDots />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-4">
            <DropdownMenuLabel className="font-semibold text-slate-500 mb-4">
              ACTION
            </DropdownMenuLabel>

            <DropdownMenuItem className="gap-4">
              <MdOutlineEdit size={20} />
              <span className="font-medium">Edit</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-4">
              <FaRegCircleStop size={20} />
              <span className="font-medium">Deactivate</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
const UsersTable = () => {
  const [, setRowSelection] = useState<Row<Activities>[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  return (
    <div>
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

export default UsersTable;
