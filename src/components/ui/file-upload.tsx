import { MdOutlineFileUpload } from "react-icons/md";
import { Input } from "./input";

const FileUpload = () => {
  return (
    <>
      <label htmlFor="upload">
        <div className="w-full h-auto border border-gray-200 bg-gray-100 p-5 rounded-lg cursor-pointer">
          <div className="flex flex-col items-center gap-3">
            <MdOutlineFileUpload size={22} />
            <p className="font-medium text-lg">Upload Drivers License</p>

            <p className="text-gray-400">JPEG or PNG</p>
            <div className=" border border-gray-200 bg-gray-100 hover:bg-gray-150 text-black px-10 py-2 rounded-md">
              Browse File
            </div>
          </div>
        </div>
      </label>
      <Input type="file" id="upload" className="hidden" />
    </>
  );
};

export default FileUpload;
