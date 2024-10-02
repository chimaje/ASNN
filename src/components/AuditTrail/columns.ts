

export type AuditTrail = {
    activity: string;
    action: string;
    email: string;
    phone: string;

  };
  
export const auditTrails:AuditTrail[]=[
    {
      activity: "Transferred",
      action: "Generate Pin",
      phone: "08099922344",
      email: "m@example.com",
    },
  
  ]