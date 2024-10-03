import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
const StepTwo = ({
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
      <div className="block md:flex gap-4 space-y-4">
        <div className="w-full md:w-1/2">
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Car Brand</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="select your car brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <p className="font-medium text-black text-sm p-4">
                        CAR BRAND
                      </p>
                      <SelectItem value="Toyota">Toyota</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2">
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Car Model</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="select your car model" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <p className="font-medium text-black text-sm p-4">
                        CAR MODEL
                      </p>
                      <SelectItem value="Model 1">Model 1</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>
      <FormField
        control={form.control}
        name="color"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Color</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter color of your vehicle"
                {...field}
                error={Boolean(form.formState.errors?.color)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="condition"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vehicle Condition</FormLabel>
            <FormControl>
              <Input
                placeholder="Describe vehicle condition"
                {...field}
                error={Boolean(form.formState.errors?.condition)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="vin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vehicle Identification Number</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your vin"
                {...field}
                error={Boolean(form.formState.errors?.vin)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className="block md:flex gap-4 space-y-4">
        <div className="w-full md:w-1/2">
          <FormField
            control={form.control}
            name="plate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Plate Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your plate number"
                    {...field}
                    error={Boolean(form.formState.errors?.plate)}
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
            name="insurance"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Insurance Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="select insurance status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <p className="font-medium text-black text-sm p-4">
                        INSURANCE STATUS
                      </p>
                      <SelectItem value="Fully Insured">
                        Fully Insured
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default StepTwo;
