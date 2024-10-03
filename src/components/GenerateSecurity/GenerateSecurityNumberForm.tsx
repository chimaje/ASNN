import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import SuccessModal from "../ui/success-modal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Form } from "../ui/form";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
const GenerateSecurityNumberForm = ({
  hideCancel,
  setOpened,
}: {
  hideCancel?: boolean;
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [active, setActive] = useState(0);
  const generateSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    address: z.string(),
    brand: z.string(),
    model: z.string(),
    color: z.string(),
    condition: z.string(),
    kin: z.string(),
    vin: z.string(),
    plate: z.string(),
    insurance: z.string(),
    bvn: z.string().min(10),
    nin: z.string().min(10),
    phone: z.string().min(11),
  });
  const form = useForm<z.infer<typeof generateSchema>>({
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
        .trigger(["name", "phone", "email", "address", "bvn", "nin", "kin"])
        .then(
          (res) => res && setActive((prev) => (prev !== 1 ? prev + 1 : prev))
        );
    } else {
      if (setOpened) {
        setOpened(false);
      }

      setOpenDialog(true);
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

      <SuccessModal
        footer={
          <div className="w-full grid grid-cols-2 gap-5">
            <Button variant="outline" size="lg">
              Download
            </Button>
            <Button size="lg">Send As Email</Button>
          </div>
        }
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        description="Your security number has been created"
      />
    </div>
  );
};

export default GenerateSecurityNumberForm;
