import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import checkMark from "../../assets/svgs/check_mark.svg";
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
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent>
          <AlertDialogHeader className="w-auto px-20">
            <AlertDialogTitle className="text-center">
              {title || "Awesome!"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {description}
            </AlertDialogDescription>
            <div className="flex justify-center">
              <img src={checkMark} alt="checkmark" className="w-28 h-28" />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>{footer && footer}</AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SuccessModal;
