import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Form } from "../ui/form";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const generateSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, { message: "Full name is required" }),
  address: z.string().min(2, { message: "Address is required" }),
  brand: z.string().min(2, { message: "Car Brand is required" }),
  model: z.string().min(2, { message: "Car Model is required" }),
  color: z.string().min(2, { message: "Car Color is required" }),
  condition: z.string().min(2, { message: "Car Condition is required" }),
  kin: z.string().min(2, { message: "Next of Kin is required" }),
  vin: z.string().min(8, { message: "Enter Valid VIN" }),
  plate: z.string().min(8, { message: "Enter Valid Plate Number" }),
  insurance: z.string().min(2, { message: "Insurance Status is required" }),
  bvn: z.string().min(10, { message: "Enter Valid BVN" }),
  nin: z.string().min(10, { message: "Enter Valid NIN" }),
  phone: z.string().min(11, { message: "Enter Valid Phone Number" }),
  file: z
    .array(z.instanceof(File), { message: "Drivers License is required" })
    .min(1, { message: "Drivers License is required" }),
});

export type GenerateSecurityNumberSchema = z.infer<typeof generateSchema>;
const GenerateSecurityNumberForm = ({
  hideCancel,
  setOpened,
}: {
  hideCancel?: boolean;
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [paymentDialog, setPaymentDialog] = useState(false);
  const [active, setActive] = useState(0);

  const form = useForm<GenerateSecurityNumberSchema>({
    resolver: zodResolver(generateSchema),
    defaultValues: {
      email: "",
      name: "",
      address: "",
      kin: "",
    },
  });
  const foward = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (active === 0) {
      form
        .trigger([
          "name",
          "phone",
          "email",
          "address",
          "bvn",
          "nin",
          "kin",
          "file",
        ])
        .then(
          (res) => res && setActive((prev) => (prev !== 2 ? prev + 1 : prev))
        );
    } else if (active === 1) {
      form
        .trigger([
          "brand",
          "model",
          "color",
          "condition",
          "vin",
          "plate",
          "insurance",
        ])
        .then((res) => res && setPaymentDialog(true));
    }
  };
  const back = () => {
    setActive((prev) => prev - 1);
  };

  const onCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (setOpened) setOpened(false);
  };

  return (
    <div className="w-full">
      <div className="mb-5">
        <div className="flex items-center gap-3 ">
          <div className="h-[6px] bg-gray-200 w-full rounded-md">
            <div
              className={`bg-primary ${
                active === 0 ? "w-1/2" : "w-full"
              } h-full rounded-md`}
            />
          </div>
          <p>{active + 1}/2</p>
        </div>
      </div>
      <Form {...form}>
        <form className="space-y-4">
          {active === 0 && <StepOne form={form} />}
          {active === 1 && <StepTwo form={form} />}

          <StepThree
            form={form}
            opened={paymentDialog}
            setOpened={setPaymentDialog}
            closeForm={() => {
              form.reset();
              if (setOpened) setOpened(false);
              setActive(0);
            }}
          />

          <div className="flex  gap-4">
            {!hideCancel && active === 0 && (
              <Button
                className="w-full "
                size="lg"
                variant="ghost"
                onClick={onCancel}
              >
                Cancel
              </Button>
            )}
            {active > 0 && (
              <Button
                variant="ghost"
                className="w-full flex items-center gap-2"
                onClick={back}
                size="lg"
              >
                <ChevronLeft size={15} /> Previous
              </Button>
            )}
            <Button
              className={` w-full flex items-center gap-2`}
              onClick={foward}
              size="lg"
            >
              {active === 0 ? "Next" : "Proceed"} <ChevronRight size={15} />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GenerateSecurityNumberForm;
