import React from "react";

function Sidebar({title,SidebarShow,setSidebarShow,children}){
    return(
        <div className={`h-screen w-screen fixed grid grid-cols-2 
        top-0 float-right transition-all duration-700
        delay-200 ease-in-out
        ${SidebarShow?"translate-x-0":"translate-x-full"}
         right-0 bg-black bg-opacity-20`}>
            <div onclick={()=>{
                setSidebarShow()
            }} className="w-full "></div>
            <div className="w-full h-full bg-red-500">
                {title}
                {children}
                </div>
        </div>
    )
}
export default Sidebar;