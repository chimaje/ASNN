import { useState } from "react";
import { DataTable } from "../ui/data-table";
import { ColumnDef, Row } from "@tanstack/react-table";
import { auditTrails, AuditTrail } from "./columns";
import { BsThreeDots } from "react-icons/bs";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const columns: ColumnDef<AuditTrail>[] = [
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
    accessorKey: "activity",
    header: "Activity",
  },
  {
    accessorKey: "action",
    header: "Action",
  },

  {
    accessorKey: "email",
    header: "Email Address",
  },
  {
    accessorKey: "phone",
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
          {/* <DropdownMenuContent className="p-4">
            <DropdownMenuLabel className="font-semibold text-slate-500 mb-4">
              ACTION
            </DropdownMenuLabel>
            <DropdownMenuItem className="gap-4">
              <FaRegCircleStop size={20} />
              <span className="font-medium">Edit</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-4">
              <MdOutlineEdit size={20} />
              <span className="font-medium">Deactivate</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
          </DropdownMenuContent> */}
        </DropdownMenu>
      );
    },
  },
];
const AuditTrailTable = () => {
  const [, setRowSelection] = useState<Row<AuditTrail>[]>([]);
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
        data={auditTrails}
        onRowValuesChecked={(data) => setRowSelection(data)}
      />
    </div>
  );
};

export default AuditTrailTable;
