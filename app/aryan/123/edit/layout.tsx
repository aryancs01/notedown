import { ReactNode } from "react";

export default function EditLayout({children}:{children:ReactNode}){
    return (
       <div className="mx-72 mt-5">
            {children}
       </div>
    )
}