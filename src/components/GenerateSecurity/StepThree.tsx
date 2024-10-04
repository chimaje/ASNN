import React, { useState } from "react";
import { Button } from "../ui/button";
import { UseFormReturn } from "react-hook-form";
import { GenerateSecurityNumberSchema } from "./GenerateSecurityNumberForm";
import logo from "@/assets/svgs/logo_white.svg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FaChevronRight, FaRegFile } from "react-icons/fa";
import SuccessModal from "../ui/success-modal";

const StepThree = ({
  form,
  opened,
  setOpened,
  closeForm,
}: {
  form: UseFormReturn<GenerateSecurityNumberSchema, unknown, undefined>;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  closeForm: () => void;
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const { email, phone, address, file, name } = form.getValues();
  const complete = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <Dialog open={opened} onOpenChange={setOpened}>
        <DialogContent className="max-h-[90dvh] md:min-w-[600px] overflow-y-auto p-2">
          <div className="flex justify-between items-center border-b p-4 mb-4 bg-black">
            <img src={logo} alt="ASNN Logo" className="h-auto w-30" />

            <div className="text-right text-white">
              <p className="text-xs">Ph.No: {phone}</p>
              <p className="text-xs">Email ID: {email} </p>
            </div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div>
              <h2 className="text-sm font-extralight">Invoice To:</h2>
              <p className="font-bold">{name}</p>
              <p className="text-sm font-ligh">{address}</p>
            </div>
            <div className="text-right">
              <p className="font-extralight text-xl">INVOICE</p>
              <p className="text-xs">INV - 7644</p>
              <p className="text-xs font-extraextralight">
                {new Date()
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(",", "")}
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <FaRegFile />
            <p className="text-sm">{file?.length > 0 && file[0].name}</p>
          </div>

          <div className=" border-b py-4 mb-4">
            <div className="flex justify-between">
              <p className="text-sm font-semibold">ITEM DESCRIPTION</p>
              <p className="text-sm font-semibold">PRICE</p>
              <p className="text-sm font-semibold">TOTAL</p>
            </div>
            <hr className="h-[1px] bg-black w-full border-none" />

            <div className="flex justify-between my-2">
              <p className="text-sm">Security Number</p>
              <p className="text-sm">₦100,000</p>
              <p className="text-sm">₦100,000</p>
            </div>
          </div>

          <div className="mb-6 flex justify-end gap-20">
            <div className="space-y-4">
              <p className="text-sm font-semibold">SUB TOTAL</p>
              <p className="text-sm font-semibold">TAX</p>
              <p className="text-sm font-semibold">GRAND TOTAL</p>
            </div>
            <div className="space-y-4">
              <p className="text-sm">₦100,000</p>
              <p className="text-sm">₦8,000</p>
              <p className="text-sm">108,000</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold mb-2">Bank Info:</h3>
            <hr className="my-3" />
            <div className="space-y-4">
              <p className="text-sm">
                <span className="font-semibold ">Bank Name:</span> First Bank
              </p>
              <p className="text-sm">
                <span className="font-semibold ">Account Name:</span> Abuja
                Security
              </p>
              <p className="text-sm">
                <span className="font-semibold ">Account No:</span> 7584 8747
                8485
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              className="w-full flex items-center gap-2"
              onClick={complete}
            >
              Click after payment
              <FaChevronRight size={13} />
            </Button>
          </div>
          <hr />
          <p className="text-center text-xs text-black mt-2 mb-4">
            THANK YOU FOR YOUR BUSINESS
          </p>
        </DialogContent>
      </Dialog>
      <SuccessModal
        footer={
          <div className="w-full grid grid-cols-2 gap-5">
            <Button variant="outline" size="lg">
              Download
            </Button>
            <Button size="lg">Send As Email</Button>
          </div>
        }
        close={(open) => {
          setOpenDialog(open);
          setOpened(false);
          closeForm();
        }}
        openDialog={openDialog}
        description="Your security number has been created"
      />
    </>
  );
};

export default StepThree;
