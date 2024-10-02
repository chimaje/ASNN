import GenerateTokenForm from "@/components/GenerateToken/GenerateTokenForm";

const GeneratePin = () => {
  return (
    <div className="flex justify-center items-center  pt-10 px-5 md:px-10 w-full min-h-[calc(100dvh-83px)] bg-gray-100">
      <div className="w-[700px]">
        <p className="font-medium text-lg">Generate Token</p>
        <p className="text-gray-600 mb-10">
          Fill information below to generate token
        </p>
        <GenerateTokenForm hideCancel />
      </div>
    </div>
  );
};

export default GeneratePin;
