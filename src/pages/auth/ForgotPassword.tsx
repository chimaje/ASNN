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
const ForgotPassword = () => {
  const forgotSchema = z.object({
    email: z.string().email(),
  });
  const form = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = () => {};

  return (
    <>
      <p className="font-bold text-4xl mb-4">Forgot Password?</p>
      <p className="font-medium text-[#989898] mb-10">
        Can’t remember your password? No worries, a rest link would be sent to
        your registered email.
      </p>
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

          <Button className="w-full " type="submit" size="lg">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ForgotPassword;
