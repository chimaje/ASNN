import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MdChevronRight } from "react-icons/md";
import SuccessModal from "../ui/success-modal";
import { useState } from "react";
const NewUserForm = ({ hideCancel }: { hideCancel?: boolean }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const userSchema = z.object({
    email: z.string().email(),
  });
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = () => {
    setOpenDialog(true);
    setTimeout(() => {
      setOpenDialog(false);
    }, 2000);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Email"
                    {...field}
                    error={Boolean(form.formState.errors?.email)}
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
              Send Invitation <MdChevronRight size={20} />
            </Button>
          </div>
        </form>
      </Form>
      <SuccessModal
        footer={
          <Button
            size="lg"
            className="w-full"
            onClick={() => setOpenDialog(false)}
          >
            Done
          </Button>
        }
        openDialog={openDialog}
        close={(open) => {
          setOpenDialog(open);}}
        description="You have successfully sent a user invite"
        title="Invitation Sent"
      />
    </div>
  );
};

export default NewUserForm;
