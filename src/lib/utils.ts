import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStatusColor=(status:string)=>{
  switch (status.toLowerCase()) {
    case "active":
      
      return "green";
  
    case "inactive":
      
      return "red";
    default:
      break;
  }
}