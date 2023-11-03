import React from "react";
import { createContext } from "react";
export const authcontext=createContext()
export default function AuthcontextAPI({children}){
    return(
        <authcontext.Provider value={{name:'ayush'}}>
            {children}
        </authcontext.Provider>
    )
}