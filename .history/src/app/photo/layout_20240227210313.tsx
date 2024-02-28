import { ReactNode } from "react";

export default function PageLayout({children,modal}:{children:ReactNode,modal:ReactNode}){
    return (
        <div>
            {children}
            {modal}
        </div>
    )

}