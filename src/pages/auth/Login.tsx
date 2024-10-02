import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import logo from "../../assets/svgs/logo_white.svg";
import logoDark from "../../assets/svgs/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { PRIVATE_PATHS, PUBLIC_PATHS } from "@/constants/routes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Login = () => {
  const navigate = useNavigate();
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = () => {
    navigate(PRIVATE_PATHS.DASHBOARD);
  };
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 min-h-dvh">
      <div className="bg-auth-pattern bg-no-repeat bg-cover w-full h-full pl-10 pt-10 hidden md:block">
        <img src={logo} alt="Cupin Logo" className="" />
        <p className="font-semibold text-2xl text-white w-7/12 mt-4">
          Track and manage all educational fees in one place with real-time
          updates to make education more accessible.
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center px-5 md:px-0">
        <div className="md:w-[70%] mt-20 py-10">
          <div className="w-full md:hidden flex justify-center">
            <img src={logoDark} alt="Cupin Logo" className="w-1/2 mb-5" />
          </div>
          <p className="font-bold text-4xl mb-4">Welcome Back!</p>
          <p className="font-medium text-[#989898] mb-10">
            Securely manage and track your educational payments with ease.
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Enter Password"
                        {...field}
                        error={Boolean(form.formState.errors?.password)}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <NavLink to={PUBLIC_PATHS.FORGOT_PASSWORD}>
                <p className="text-primary font-semibold text-right cursor-pointer mt-4">
                  Forgot Password?
                </p>
              </NavLink>
              <Button className="w-full " type="submit" size="lg">
                Login
              </Button>
            </form>
          </Form>
          {/* 
          <NavLink to={PUBLIC_PATHS.REGISTER}>
            <p className="text-center mt-5 text-sm">
              Don't have an account?{" "}
              <span className="text-primary font-semibold">Sign Up</span>
            </p>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
