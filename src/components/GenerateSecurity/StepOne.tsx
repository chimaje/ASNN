import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import FileUpload from "../ui/file-upload";
const StepOne = ({
  form,
}: {
  form: UseFormReturn<
    {
      email: string;
      name: string;
      address: string;
      brand: string;
      model: string;
      color: string;
      condition: string;
      kin: string;
      vin: string;
      plate: string;
      insurance: string;
      bvn: string;
      nin: string;
      phone: string;
    },
    unknown,
    undefined
  >;
}) => {
  return (
    <>
      <FileUpload />
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your full name"
                {...field}
                error={Boolean(form.formState.errors?.name)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your phone number"
                {...field}
                type="number"
                error={Boolean(form.formState.errors?.phone)}
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
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your email address"
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
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Residential Address</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your residential address"
                {...field}
                error={Boolean(form.formState.errors?.address)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className="block md:flex gap-5 space-y-4">
        <div className="w-full md:w-1/2">
          <FormField
            control={form.control}
            name="bvn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Verificatin Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your BVN"
                    {...field}
                    type="number"
                    error={Boolean(form.formState.errors?.bvn)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2">
          <FormField
            control={form.control}
            name="nin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>National Identity Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your BVN"
                    {...field}
                    type="number"
                    error={Boolean(form.formState.errors?.nin)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <FormField
        control={form.control}
        name="kin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Next of Kin</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your next of kin's name"
                {...field}
                error={Boolean(form.formState.errors?.kin)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default StepOne;
