import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import NewUserForm from "@/components/GenerateSecurity/NewUserForm";
import UsersTable from "@/components/Users/UsersTable";
const Users = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="  pt-10 px-5 md:px-10 w-full min-h-[calc(100dvh-83px)] bg-gray-100">
      <div className="flex flex-col items-start md:flex-row gap-4 md:items-center justify-between w-full mb-10 ">
        <div>
          <p className="text-3xl font-semibold">All Users</p>
        </div>
        <Dialog open={opened} onOpenChange={setOpened}>
          <DialogTrigger>
            <Button className="gap-2">
              <MdAdd color="white" /> Add User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="mb-4">
              <DialogTitle>Create Users</DialogTitle>
              <DialogDescription>
                Fill information below to send a user invite
              </DialogDescription>
            </DialogHeader>
            <NewUserForm />
          </DialogContent>
        </Dialog>
      </div>

      <UsersTable />
    </div>
  );
};

export default Users;
