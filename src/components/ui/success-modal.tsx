import checkMark from "../../assets/svgs/check_mark.svg";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
const SuccessModal = ({
  openDialog,

  footer,
  title,
  description,
  close,
}: {
  openDialog: boolean;
  footer: React.ReactNode;
  description?: string;
  title?: string;
  close: (_open: boolean) => void;
}) => {
  return (
    <div>
      <Dialog open={openDialog} onOpenChange={(open) => close(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              {" "}
              {title || "Awesome!"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {" "}
              {description}
            </DialogDescription>
            <div className="flex justify-center">
              <img src={checkMark} alt="checkmark" className="w-28 h-28" />
            </div>
          </DialogHeader>
          <DialogFooter>{footer && footer}</DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuccessModal;
