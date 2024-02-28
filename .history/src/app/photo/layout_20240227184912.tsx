import { ReactNode } from "react";

export default function PageLayout({child}:{child:ReactNode}){
    return (
        <div>
            {child}
        </div>
    )

}