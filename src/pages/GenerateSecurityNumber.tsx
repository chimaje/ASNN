import GenerateSecurityNumberForm from "@/components/GenerateSecurity/GenerateSecurityNumberForm";

const GenerateSecurityNumber = () => {
  return (
    <div className="flex justify-center items-center  pt-10  md:px-10 w-full min-h-[calc(100dvh-83px)] bg-gray-100 pb-20">
      <div className="w-[600px] bg-white p-5 rounded-lg shadow-md">
        <p className="font-medium text-lg">Personal Information</p>
        <p className="text-gray-600 mb-10">Fill in your personal details.</p>
        <GenerateSecurityNumberForm hideCancel />
      </div>
    </div>
  );
};

export default GenerateSecurityNumber;
