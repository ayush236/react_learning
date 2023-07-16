import React from "react";
import { NavData } from "./NavData";
import{BiMenu} from 'react-icons/bi';

function Toolbar({setSidebarShow}){
    return(
        <div className="bg-red-600 w-screen flex justify-between text-white px-6 h-12 items-center
        sm:bg-orange-500
        md:bg-blue-600
        lg:bg-pink-700
        xl:bg-green-800
        2xl:bg-yellow-800">

            <div className="text-3x font-semibold drop-shadow-md ">logo</div>
            <div className="flex gap-6 capitalize hidden md:flex">
                {
                    NavData.map((val,i)=>{
                        return <div key={i}>{val.title}</div>
                  })
                }
            </div>
            <div  onclick={()=>{
                    setSidebarShow() 
            }}className=" color-orange-600 flex md:hidden text-xl">
                <BiMenu/>
            </div>
            </div>
            
    )
}
export default Toolbar;