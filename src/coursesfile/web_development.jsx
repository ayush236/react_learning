import React, { useState } from "react";
// import React, { useState } from "react";
function Web_development(){
    const [pop, setPop]=useState(false);
    const [pop1, setPop1]=useState(false);
    return(
        <>
        {/* fourth section of box */}
        <div className="border-2 border-black p-5 m-6">
            {/* first part */}
            <div className="text-2xl font-semibold mb-2">Build websites and applications with Web Development</div>
            {/* second  part */}
            <div>The world of web development is as wide as the internet itself. Much of our social and vocational lives play out<br/> on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and<br/> applications that we increasingly rely on...</div>
            {/* third part */}
            <div className="mt-4">
                <button className="border-2 border-black w-32 h-12 hover:bg-gray-300 ">Explore Python</button>
            </div >
     <div className="grid grid-cols-5 gap-4  ">
   
            {/* fouth part card haru */}
            <div className="mt-8 relative  "  >
            {
            pop?<div className=" absolute top-0 bg-green-600 p-20" onMouseOver={()=>{
                setPop(true)
            }} onMouseLeave={()=>{
                setPop(false)
            }}>you</div>:""        }
                {/* first card */}
                <div onMouseOver={()=>{
                setPop(true)
            }} onMouseLeave={()=>{
                setPop(false)
            }}>
                {/* upper card */}
                <div>
                    <img src="./card/top11.png" alt="firstcard" className="border-2 W-60 h-32 "/>
                </div>
                {/* lower card */}
                {/* lower first part */}
                <div className="font-bold"> The Complete Python<br/>
                Bootcamp from Zero to Hero..
                </div>
                {/* lower second part */}
                <div className="font-thin text-sm">Ayush khatri</div>
                {/* lower third part */}
                <div className="font-thin text-md">Inroll(123,890)</div>
                {/* lower  fourth part*/}
                <div className="font-bold text-xl">$16.99</div>
                {/* lower fifth part */}
                <div>
                    <button className="border-1 border-pink-500 bg-pink-500 text-white w-28 h-9 ml-24">Add to cart</button>
                </div>
                </div>
            </div>
            {/* second card  */}
            <div className="mt-8 relative" >
                {
                    pop1?<div className="bg-blue-600 absolute top-0  p-20 " onMouseOver={()=>{ setPop1(true)}} onMouseLeave={()=>{setPop1(false)}}> first try</div>:""
                }
                <div onMouseOver={()=>{setPop1(true)}} onMouseLeave={()=>{setPop1(false)}}>
                {/* upper card */}
                <div>
                    <img src="./card/top12.jpg " alt="secondcard" width={240} className="border-2  h-32"/>
                </div>
                {/* lower card */}
                {/* lower first part */}
                <div className="font-bold"> The Complete Python<br/>
                Bootcamp from Zero to Hero..
                </div>
                {/* lower second part */}
                <div className="font-thin text-sm">Ayush khatri</div>
                {/* lower third part */}
                <div className="font-thin text-md">Inroll(123,890)</div>
                {/* lower  fourth part*/}
                <div className="font-bold text-xl">$16.99</div>
                {/* lower fifth part */}
                <div>
                    <button className="border-1 border-pink-500 bg-pink-500 text-white w-28 h-9 ml-24">Add to cart</button>
                </div>
                </div>
            </div>
            {/* thrid card */}
            <div className="mt-8" >
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/top13.png" alt="firstcard" className="border-2 W-60 h-32"/>
                </div>
                {/* lower card */}
                {/* lower first part */}
                <div className="font-bold"> The Complete Python<br/>
                Bootcamp from Zero to Hero..
                </div>
                {/* lower second part */}
                <div className="font-thin text-sm">Ayush khatri</div>
                {/* lower third part */}
                <div className="font-thin text-md">Inroll(123,890)</div>
                {/* lower  fourth part*/}
                <div className="font-bold text-xl">$16.99</div>
                {/* lower fifth part */}
                <div>
                    <button className="border-1 border-pink-500 bg-pink-500 text-white w-28 h-9 ml-24">Add to cart</button>
                </div>
                </div>
            </div>
            {/* fouth card */}
            <div className="mt-8" >
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/top14.jpg" alt="firstcard" className="border-2 W-60 h-32"/>
                </div>
                {/* lower card */}
                {/* lower first part */}
                <div className="font-bold"> The Complete Python<br/>
                Bootcamp from Zero to Hero..
                </div>
                {/* lower second part */}
                <div className="font-thin text-sm">Ayush khatri</div>
                {/* lower third part */}
                <div className="font-thin text-md">Inroll(123,890)</div>
                {/* lower  fourth part*/}
                <div className="font-bold text-xl">$16.99</div>
                {/* lower fifth part */}
                <div>
                    <button className="border-1 border-pink-500 bg-pink-500 text-white w-28 h-9 ml-24">Add to cart</button>
                </div>
                </div>
            </div>
            {/* fifth card */}
            <div className="mt-8" >
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/top16.webp" alt="firstcard" className="border-2 W-60 h-32"/>
                </div>
                {/* lower card */}
                {/* lower first part */}
                <div className="font-bold"> The Complete Python<br/>
                Bootcamp from Zero to Hero..
                </div>
                {/* lower second part */}
                <div className="font-thin text-sm">Ayush khatri</div>
                {/* lower third part */}
                <div className="font-thin text-md">Inroll(123,890)</div>
                {/* lower  fourth part*/}
                <div className="font-bold text-xl">$16.99</div>
                {/* lower fifth part */}
                <div>
                    <button className="border-1 border-pink-500 bg-pink-500 text-white w-28 h-9 ml-24">Add to cart</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        </>

    )
};
export default Web_development;