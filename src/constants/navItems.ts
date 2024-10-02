import { MdGroup, MdLogin, MdOutlineDashboard, MdOutlinePendingActions, MdOutlineVpnKey, MdReceiptLong } from "react-icons/md";
import { PRIVATE_PATHS } from "./routes";

export const navItems=[
    {
        name:"Dashboard",
        icon:MdOutlineDashboard,
    
        path:PRIVATE_PATHS.DASHBOARD
    },
    {
        name:"Generate Pin",
        icon:MdOutlineVpnKey,
       

        path:PRIVATE_PATHS.GENERATE_PIN

    },
    {
        name:"Users",
        icon:MdGroup,
        path:PRIVATE_PATHS.USERS


    },

    {
        name:"Report",
        icon:MdReceiptLong,
        path:PRIVATE_PATHS.REPORTS


    },
    
    {
        name:"Audit Trails",
        icon:MdOutlinePendingActions,
        path:PRIVATE_PATHS.AUDIT_TRAIL


    },

    {
        name:"Logout",
        icon:MdLogin,
        onClick:(fun:()=>void)=> fun(),
        bottom:true,
    }
]