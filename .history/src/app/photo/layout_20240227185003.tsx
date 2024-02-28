import { ReactNode } from "react";

export default function PageLayout({children}:{children:ReactNode}){
    return (
        <div style={{background:'#ccc'}}>
            {children}
        </div>
    )

}