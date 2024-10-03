import React, { useState, useCallback, ChangeEvent, useRef } from "react";
import { MdOutlineFileUpload, MdFilePresent, MdDelete } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  showPreview?: boolean;
  imagePreview?: boolean;
  multiple?: boolean;
  acceptedFileTypes?: string;
  maxFileSize?: number;
  onChange?: (files: File[]) => void;
  defaultFiles?: File[];
}

interface FileWithPreview extends File {
  preview?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  showPreview = false,
  imagePreview = false,
  multiple = false,
  acceptedFileTypes = "image/jpeg,image/png",
  maxFileSize = 5 * 1024 * 1024,
  onChange,
  defaultFiles,
}) => {
  const [files, setFiles] = useState<FileWithPreview[]>(defaultFiles || []);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(event.target.files || []);
      const validFiles = selectedFiles.filter((file) => {
        if (file.size > maxFileSize) {
          setError(
            `File ${file.name} is too large. Max size is ${
              maxFileSize / 1024 / 1024
            }MB.`
          );
          return false;
        }
        if (!acceptedFileTypes.includes(file.type)) {
          setError(`File ${file.name} is not an accepted file type.`);
          return false;
        }
        return true;
      });

      const filesWithPreviews = validFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      if (multiple) {
        setFiles((prev) => [...prev, ...filesWithPreviews]);
      } else {
        setFiles(filesWithPreviews);
      }

      setError(null);
      if (onChange) onChange(validFiles);
    },
    [maxFileSize, acceptedFileTypes, onChange, multiple]
  );

  const handleRemoveFile = useCallback(
    (fileToRemove: FileWithPreview) => {
      setFiles((prev) => {
        const updatedFiles = prev.filter((file) => file !== fileToRemove);
        if (onChange) onChange(updatedFiles);

        if (fileRef.current) {
          fileRef.current.value = "";

          const dt = new DataTransfer();
          updatedFiles.forEach((file) => dt.items.add(file));
          fileRef.current.files = dt.files;
        }

        return updatedFiles;
      });

      if (fileToRemove.preview) URL.revokeObjectURL(fileToRemove.preview);
    },
    [onChange]
  );

  return (
    <>
      <label htmlFor="file-upload">
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
      <Input
        ref={fileRef}
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
        multiple={multiple}
        accept={acceptedFileTypes}
      />

      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

      {showPreview && files.length > 0 && (
        <div className="mt-6 space-y-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <MdFilePresent className="text-blue-500" size={24} />
                <span className="text-sm font-medium truncate max-w-[200px]">
                  {file.name}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveFile(file)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete size={20} />
              </Button>
            </div>
          ))}
        </div>
      )}

      {imagePreview && files.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          {files.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={file.preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => handleRemoveFile(file)}
              >
                <MdDelete size={20} />
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FileUpload;
