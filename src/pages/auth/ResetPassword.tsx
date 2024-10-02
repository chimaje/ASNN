import { Button } from "@/components/ui/button";
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
import { PasswordInput } from "@/components/ui/password-input";
import { NavLink, useNavigate } from "react-router-dom";
import { PUBLIC_PATHS } from "@/constants/routes";
import { useState } from "react";
import SuccessModal from "@/components/ui/success-modal";
import { AlertDialogAction } from "@/components/ui/alert-dialog";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const resetSchema = z
    .object({
      newPassword: z.string().min(5),
      confirmNewPassword: z.string().min(5),
    })
    .refine((args) => args.confirmNewPassword === args.newPassword, {
      message: "Password must be the same",
      path: ["confirmNewPassword"],
    });
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const onSubmit = () => {
    setOpenDialog(true);
    setTimeout(() => {
      navigate(PUBLIC_PATHS.LOGIN);
    }, 2000);
  };

  return (
    <>
      <p className="font-bold text-4xl mb-4">Reset Password</p>
      <p className="font-medium text-[#989898] mb-10">
        Securely manage and track your educational payments with ease.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter new password"
                    {...field}
                    error={Boolean(form.formState.errors?.newPassword)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter confirm new password"
                    {...field}
                    error={Boolean(form.formState.errors?.confirmNewPassword)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full " type="submit" size="lg">
            Create New Password
          </Button>
        </form>
      </Form>
      <SuccessModal
        footer={
          <NavLink to={PUBLIC_PATHS.LOGIN} className="w-full">
            <AlertDialogAction className="w-full">
              Back to Login
            </AlertDialogAction>
          </NavLink>
        }
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        description="Your password has been created"
      />
    </>
  );
};

export default ResetPassword;
