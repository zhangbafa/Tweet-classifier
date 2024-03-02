import { ReactNode } from "react";

export default function PhotoLayout({children,modal}:{
    children:React.ReactNode
    modal:React.ReactNode
}){
    return (
        <div>
            {children}
            {modal}
        </div>
    )

}