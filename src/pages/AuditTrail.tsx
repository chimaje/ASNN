import AuditTrailTable from "@/components/AuditTrail/AuditTrailTable";

const AuditTrail = () => {
  return (
    <div className="  pt-10 px-5 md:px-10 w-full min-h-[calc(100dvh-83px)] bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between w-full mb-10 ">
        <div>
          <p className="text-3xl font-semibold">All Audit Trails</p>
        </div>
      </div>

      <AuditTrailTable />
    </div>
  );
};

export default AuditTrail;
