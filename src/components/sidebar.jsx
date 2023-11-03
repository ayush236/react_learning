import React, {useState} from "react";
import { NavData } from "./NavData";

function Sidebar({title,SidebarShow,setSidebarShow,children}){
    return(
        <div className={`h-screen w-screen fixed grid grid-cols-2
        top-12 float-right transition-all duration-700
        delay-200 ease-in-out
        ${SidebarShow?"translate-x-0":"translate-x-full"}
         right-0 bg-opacity-10`}>
            <div onClick={()=>{
                setSidebarShow(!SidebarShow);
            }} className="w-full "></div>
            <div className="w-full h-full bg-blue-800 text-white flex flex-col items-center gap-8 capitalize text-xl border-solid border-black ">
                {
                    NavData.map((val,i)=>{
                        return <div key={i}>
                            {val.title}
                            </div>
                    })
                }
                </div>
        </div>
    )
}
export default Sidebar;