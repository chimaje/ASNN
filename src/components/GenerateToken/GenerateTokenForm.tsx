import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SuccessModal from "../ui/success-modal";
const GenerateTokenForm = ({ hideCancel }: { hideCancel?: boolean }) => {
  const [confirmDetails, setConfirmDetails] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const generateSchema = z.object({
    slipNumber: z.string().min(8),
    matric: z.string().min(8),
    amount: z.number().min(1),
  });
  const form = useForm<z.infer<typeof generateSchema>>({
    resolver: zodResolver(generateSchema),
    defaultValues: {
      slipNumber: "",
      matric: "",
      amount: 1,
    },
  });
  const onSubmit = () => {
    setConfirmDetails(true);
  };
  const onGenerate = () => {
    setConfirmDetails(false);
    setOpenDialog(true);
    setTimeout(() => {
      setOpenDialog(false);
    }, 2000);
  };
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="slipNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deposit Slip Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Slip Number"
                    {...field}
                    error={Boolean(form.formState.errors?.slipNumber)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="matric"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Matric Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Matric Number"
                    {...field}
                    error={Boolean(form.formState.errors?.matric)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Amount"
                    {...field}
                    error={Boolean(form.formState.errors?.amount)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-4">
            {!hideCancel && (
              <Button className="w-auto " size="lg" variant="ghost">
                Cancel
              </Button>
            )}
            <Button
              className={`${hideCancel ? "w-full" : "w-auto"}`}
              type="submit"
              size="lg"
            >
              Proceed
            </Button>
          </div>
        </form>
      </Form>
      <Dialog open={confirmDetails} onOpenChange={setConfirmDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>STUDENT DETAILS</DialogTitle>
          </DialogHeader>
          <div className="flex justify-between">
            <div>
              <p className="text-primary font-semibold">First Name</p>
              <p>Boye</p>
            </div>
            <div className="text-right">
              <p className="text-primary font-semibold">Last Name</p>
              <p>Sam</p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <p className="text-primary font-semibold">Amount</p>
              <p>100,000</p>
            </div>
            <div className="text-right">
              <p className="text-primary font-semibold">Performance Status</p>
              <p>Prepaid</p>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="text-center">
              <p className="text-primary font-semibold">Date</p>
              <p>08/08/2024</p>
            </div>
          </div>
          <Button className="w-full" onClick={onGenerate} size="lg">
            Generate
          </Button>
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
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        description="Your password has been created"
      />
    </div>
  );
};

export default GenerateTokenForm;
