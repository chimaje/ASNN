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
import { GenerateSecurityNumberSchema } from "./GenerateSecurityNumberForm";
import { Textarea } from "../ui/textarea";
const StepTwo = ({
  form,
}: {
  form: UseFormReturn<GenerateSecurityNumberSchema, unknown, undefined>;
}) => {
  return (
    <>
      <div className="block md:flex gap-4 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2">
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Car Brand</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.trigger("brand");
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        error={Boolean(form.formState.errors?.brand)}
                      >
                        <SelectValue placeholder="select your car brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <p className="font-medium text-black text-sm p-4">
                        CAR BRAND
                      </p>
                      {[
                        "Toyota",
                        "Honda",
                        "Ford",
                        "Tesla",
                        "Audi",
                        "Chevrolet",
                        "Nissan",
                        "Lexus",
                        "Mercedes",
                      ].map((item) => (
                        <SelectItem value={item}>{item}</SelectItem>
                      ))}
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
                    onValueChange={(value) => {
                      field.onChange(value);
                      form.trigger("model");
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        error={Boolean(form.formState.errors?.model)}
                      >
                        <SelectValue placeholder="select your car model" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <p className="font-medium text-black text-sm p-4">
                        CAR MODEL
                      </p>
                      {[
                        "Camry",
                        "Civic",
                        "Mustang",
                        "X5",
                        "E-Class",
                        "A4",
                        "Model S",
                        "Malibu",
                        "Altima",
                        "RX",
                        "Jetta",
                        "Elantra",
                        "Optima",
                        "Outback",
                      ].map((item) => (
                        <SelectItem value={item}>{item}</SelectItem>
                      ))}
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
                onKeyUp={() => form.trigger("color")}
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
              <Textarea
                placeholder="Describe vehicle condition"
                onKeyUp={() => form.trigger("condition")}
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
                onKeyUp={() => form.trigger("vin")}
                error={Boolean(form.formState.errors?.vin)}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className="block md:flex gap-4 space-y-4 md:space-y-0">
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
                    onKeyUp={() => form.trigger("plate")}
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
                <FormLabel>Insurance Status</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.trigger("insurance");
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      error={Boolean(form.formState.errors?.insurance)}
                    >
                      <SelectValue placeholder="select insurance status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <p className="font-medium text-black text-sm p-4">
                      INSURANCE STATUS
                    </p>
                    {[
                      "Fully Insured",
                      "Partially Insured",
                      "Not Insured",
                      "Pending Renewal",
                      "Expired",
                    ].map((item) => (
                      <SelectItem value={item}>{item}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default StepTwo;
