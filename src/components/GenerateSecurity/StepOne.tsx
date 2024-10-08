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
import { GenerateSecurityNumberSchema } from "./GenerateSecurityNumberForm";
const StepOne = ({
  form,
}: {
  form: UseFormReturn<GenerateSecurityNumberSchema, unknown, undefined>;
}) => {
  return (
    <>
      <FileUpload
        showPreview={true}
        maxFileSize={10 * 1024 * 1024}
        onChange={(files) => {
          form.setValue("file", files);
          form.trigger("file");
        }}
        defaultFiles={form.getValues().file}
      />
      <p className="text-sm text-red-600">
        {Boolean(form.formState.errors?.file) &&
          form.formState.errors?.file?.message}
      </p>
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
                onKeyUp={() => form.trigger("name")}
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
                onKeyUp={() => form.trigger("phone")}
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
                onKeyUp={() => form.trigger("email")}
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
                onKeyUp={() => form.trigger("address")}
                placeholder="Enter your residential address"
                {...field}
                error={Boolean(form.formState.errors?.address)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className="block md:flex gap-5 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2">
          <FormField
            control={form.control}
            name="bvn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Verificatin Number</FormLabel>
                <FormControl>
                  <Input
                    onKeyUp={() => form.trigger("bvn")}
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
                    placeholder="Enter your NIN"
                    {...field}
                    onKeyUp={() => form.trigger("nin")}
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
                onKeyUp={() => form.trigger("kin")}
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
