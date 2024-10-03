

export type AuditTrail = {
    activity: string;
    action: string;
    email: string;
    phone: string;

  };
  
export const auditTrails:AuditTrail[]=[
    {
      activity: "Genrated",
      action: "Generate Security Number",
      phone: "08099922344",
      email: "m@example.com",
    },
  
  ]