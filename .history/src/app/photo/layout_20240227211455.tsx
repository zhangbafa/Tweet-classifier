import { ReactNode } from "react";

export default function PhotoLayout({children,modal}:{
    children:ReactNode
    modal:ReactNode
}){
    return (
        <div>
            {children}
            {modal}
        </div>
    )

}