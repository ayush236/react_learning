import React from "react";
import { NavData } from "./NavData";
import{BiMenu} from 'react-icons/bi';
import { Link, useLocation } from "react-router-dom";

function Toolbar({setSidebarShow}){
    const location=useLocation();
    return(
        <div className="bg-blue-800 w-screen py-4 flex justify-between text-white px-6 h20 items-center
        sm:bg-blue-800
        md:bg-blue-800
        lg:bg-blue-800
        xl:bg-blue-800
        2xl:bg-blue-800">

            <div className="text-lg md:text-3x font-semibold drop-shadow-md ">logo</div>
            <div className="hidden md:flex gap-6 capitalize">
                {
                    NavData.map((val,i)=>{
                        return <div key={i} className={`${val.path === location.pathname? 'border-b-2 border-white ':'bg-transparent'}`}>
                            <Link to={val.path}>{val.title}</Link>

                        </div>
                  })
                }
            </div>
            <div  onClick={()=>{
                    setSidebarShow() 
            }} className=" md:hidden flex">
                <BiMenu/>
            </div>
            </div>
            
    )
}
export default Toolbar;