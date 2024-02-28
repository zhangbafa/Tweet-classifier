import { NextMiddleware } from "next/server";

type MiddlewareFactory = (middleware:NextMiddleware)=>NextMiddleware

export function chain(functions:MiddlewareFactory[],index=0){
    const current = functions[index]

    if(current){
        const next = chain(functions,index+1)
        return 
    }
}