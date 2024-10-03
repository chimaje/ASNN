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
  setOpenDialog,
  footer,
  title,
  description,
}: {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  footer: React.ReactNode;
  description?: string;
  title?: string;
}) => {
  return (
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
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
