import { ReactNode } from "react";

export default function PageLayout({child}:{child:ReactNode}){
    return (
        <div style={{background:'#ccc'}}>
            {child}
        </div>
    )

}