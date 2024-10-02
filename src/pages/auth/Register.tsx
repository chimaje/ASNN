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
import { PasswordInput } from "@/components/ui/password-input";

const Register = () => {
  const registerSchema = z
    .object({
      email: z.string().email({ message: "Email address is not valid" }),
      password: z.string().min(5, {
        message: "Password should be greater than 5 characters",
      }),
      firstname: z.string().min(2, { message: "First name is required" }),
      lastname: z.string().min(2, { message: "Last name is required" }),
      confirmPassword: z.string().min(5, {
        message: "Confirm password should be greater than 5 characters",
      }),
    })
    .refine((args) => args.confirmPassword === args.password, {
      message: "Password must be the same",
      path: ["confirmPassword"],
    });
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
    },
  });
  const onSubmit = () => {};

  return (
    <>
      <p className="font-bold text-4xl  mb-4">Account Setup</p>
      <p className="font-medium text-[#989898] mb-10">
        Provide your details to continue your account setup
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter First Name"
                    {...field}
                    error={Boolean(form.formState.errors?.firstname)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Last Name"
                    {...field}
                    error={Boolean(form.formState.errors?.lastname)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter password"
                    {...field}
                    error={Boolean(form.formState.errors?.password)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Enter confirm  password"
                    {...field}
                    error={Boolean(form.formState.errors?.confirmPassword)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full " type="submit" size="lg">
            Create User
          </Button>
        </form>
      </Form>

      {/* <NavLink to={PUBLIC_PATHS.LOGIN}>
        <p className="text-center mt-5 text-sm">
          Already have an account?{" "}
          <span className="text-primary font-semibold">Login</span>
        </p>
      </NavLink> */}
    </>
  );
};

export default Register;
