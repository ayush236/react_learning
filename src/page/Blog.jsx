import React from "react";
import {IoIosCheckboxOutline} from "react-icons/io" ;
 function Blog(){
    return(
        <>
        {/* background image */}
        <div className="relative">
            <div className="bg-gray-200 h-96 rounded-3xl px-9 my-9 ml-44 w-4/5 relative ">
                <div className=" flex justify-between ">
            <div className="bg-pink-600 rounded-full  h-7 w-7  m-10 "></div>
            <div className="bg-blue-400 rounded-full h-5 w-5 m-12"></div>
            </div>
            <div className=" mt-40 flex justify-between ">
            <div className="bg-yellow-600 rounded-full  h-7 w-7  m-10 "></div>
            <div className="bg-green-400 rounded-full h-5 w-5 m-12"></div>
            </div>
            </div>
            <div className="absolute top-7 left-1/2 font-bold text-xl text-green-700">Our Blog</div>
            <div className="absolute top-16 left-96 pl-24 font-bold text-5xl indent-1.5 ">Resources for makers &<br/></div>
            <div  className="absolute top-28 left-80 pl-24 font-bold text-5xl indent-1.5 ">creative to learn, sell & grow</div>
            <div className="absolute top-48 left-52 pl-24 font-thin  text-bold text-sm indent-40 ">The only corporate card and spend management platform designed to help you spend less.</div>
            <div className="ml-52 pl-20 absolute flex justify-center gap-5 top-60 left-80 ">
                <button className=" bg-black text-white h-10 w-28 border-2 border-black font-bold text-sm rounded-full ">Get started</button>
                <button className="rounded-full h-10 w-28 border-black border-2 border-thin"> view pricing</button>
            </div>
        </div>
        {/* second section */}
        <div className="top-5 h-fit px-9 my-9 ml-44 w-4/5 flex gap-7 ">
            <div className="shadow-xl p-4 rounded-xl border-1">
                <img src="./design canva/fotor-ai-202307311973.jpg" className="rounded-xl my-2"/>
                <div className="text-green-500 font-bold mt-5">Marketing</div>
                <div className="font-bold text-2xl mt-3">
                <div>Your Company might be in </div>
                <div>need of a social media audit. </div>
                </div>
                <div className="flex gap-44  mt-10">
                    <div className=" text-lg">By Ayush Khatri</div>
                    <div className=" text-xs">July 20,2023</div>
                </div>

            </div>
            <div className="grid grid-rows-2 gap-0">
                <div className="shadow-xl p-4 rounded-xl h-fit ">
                    <img src="./card/sectionsecond1.jpeg" className="rounded-xl h-44 w-full my-2 "/>
                    <div className="font-bold text-xl mt-4">
                    <div>How can business utilize email<br/></div>
                    <div>marketing to nurture thrie leads.</div>
                    </div>
                    

                </div>
                <div className="shadow-xl p-4 rounded-xl h-full">
                    <img src="./design canva/photo_2023-08-03_17-35-44.jpg" className="rounded-xl "/>
                    <div className="font-bold text-xl mt-4">
                        <div>Auto-play:How to use automated </div>
                        <div>responses for you email lists.</div>
                    </div>

                </div>
            </div>

        </div>
        {/* thrid section */}
        <div className=" mt-20 ml-5 relative">
            <div className="bg-gray-200 h-72 w-9/12 rounded-3xl px-9 my-9 ml-44  relative ">
                <div className=" flex justify-between ">
            <div className="bg-pink-600 rounded-full  h-7 w-7  m-10 "></div>
            <div className="bg-blue-400 rounded-full h-5 w-5 m-12"></div>
            </div>
            <div className=" mt-20 flex justify-between ">
            <div className="bg-green-600 rounded-full  h-7 w-7  m-10 ml-28 "></div>
            <div className="bg-red-400 rounded-full h-5 w-5 mr-20"></div>
            </div>
            </div>
            <div className="absolute top-7  ml-96 pl-36 font-bold text-4xl ">All blog posts</div>
            <div className="absolute top-28 ml-96 pl-16">With over 2,400 apps available in the Slack App Directory.</div>
            <div className="bg-white h-16 w-2/5 absolute top-40 left-4 ml-96 pl-16 rounded-full flex justify-between ">
            <input type="text" placeholder="search blog"/><button className="text-white font-bold text-sm bg-black 
            rounded-full h-12 my-2 mr-7 p-4  flex items-center">search now</button>
            </div>
        </div>
        {/* fourth section */}
        <div className=" top-5 h-fit px-9 my-9 ml-44 w-4/5">
            <div className=" flex gap-9">
            <div className="shadow-xl rounded-xl p-4">
                <img src="./design canva/69bbb2ded4e846c393aa41a6180c2394.png" className="rounded-xl"/>
                <div className="text-pink-600 font-bold my-3">Design</div>
                <div className="font-bold">
                <div>Your company might be in</div>
                <div>need of a social media audit.</div>
                </div>
                <div className="flex items-center gap-10  mt-10">
                    <div className=" text-sm">By Ayush Khatri</div>
                    <div className=" text-xs">July 20,2023</div>
                </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
                <img src="./design canva/Untitled-1.jpg" className="rounded-xl" />
                <div className="text-green-400 font-bold my-3">Development</div>
                <div className="font-bold">
                <div>How can businesses utilize </div>
                <div>email marketing to nurture.</div>
                </div>
                <div className="flex items-center gap-10  mt-10">
                    <div className=" text-sm">By Ayush Khatri</div>
                    <div className=" text-xs">July 20,2023</div>
                </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
                <img src="./design canva/Untitled-2.jpg" className="rounded-xl" />
                <div className="text-yellow-600 font-bold my-3">Photography</div>
                <div className="font-bold">
                <div>Auto-reply: How to use auto-</div>
                <div>mated responses.</div>
                </div>
                <div className="flex items-center gap-10  mt-10">
                    <div className=" text-sm">By Ayush Khatri</div>
                    <div className=" text-xs">July 20,2023</div>
                </div>
            </div>
            </div>
            <div className="flex gap-9">
            <div className="shadow-xl rounded-xl p-4">
                <img src="./design canva/Untitled-3.jpg" className="rounded-xl"/>
                <div className="text-green-400 font-bold my-3">Design</div>
                <div className="font-bold">
                <div>The correct marketing </div>
                <div>analysis tools can help you.</div>
                </div>
                <div className="flex items-center gap-10  mt-10">
                    <div className=" text-sm">By Ayush Khatri</div>
                    <div className=" text-xs">July 20,2023</div>
                </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
                <img src="./design canva/Untitled-4.jpg" className="rounded-xl" />
                <div className="text-yellow-600 font-bold my-3">Development</div>
                <div className="font-bold">
                <div>Is your company facing a </div>
                <div>customer engagement.</div>
                </div>
                <div className="flex items-center gap-10  mt-10">
                    <div className=" text-sm">By Ayush Khatri</div>
                    <div className=" text-xs">July 20,2023</div>
                </div>
            </div>
            <div className="shadow-xl rounded-xl p-4">
                <img src="./design canva/Untitled-5.jpg" className="rounded-xl" />
                <div className="text-pink-600 font-bold my-3">Photography</div>
                <div className="font-bold">
                <div>The top 7 marketing trends</div>
                <div>for July 2021.</div>
                </div>
                <div className="items-center flex gap-10  mt-10">
                    <div className=" text-sm">By Ayush Khatri</div>
                    <div className=" text-xs">July 20,2023</div>
                </div>

            </div>
            </div>
        </div>
        {/* last section */}
        <div className=" mt-20 ml-5 mb-20 relative">
            <div className="bg-white h-72 w-9/12 rounded-3xl px-9 my-9 ml-44  relative ">
                <div className=" flex justify-between ">
            <div className="bg-pink-600 rounded-full  h-3 w-3  m-10 "></div>
            <div className="bg-blue-400 rounded-full h-5 w-5 m-12"></div>
            </div>
            <div className=" mt-20 flex justify-between ">
            <div className="bg-green-600 rounded-full  h-4 w-4  m-10 ml-28 "></div>
            <div className="bg-red-400 rounded-full h-2 w-2 mr-20"></div>
            </div>
            </div>
            <div className="absolute top-7  ml-72 pl-36 font-bold text-5xl ">Register for our free</div>
            <div className="absolute top-20  ml-96 pl-20 font-bold text-5xl mt-2">7-Day Trial now!</div>
            <div className="flex ">
            <div className="absolute top-40 ml-96 pl-16 flex items-center gap-2  text-sm"> <IoIosCheckboxOutline/> No credit card required </div>
            <div className="absolute top-40 ml-96 pl-80 flex items-center gap-2  text-sm"> <IoIosCheckboxOutline/> Cancel anytime </div>
            </div>
            <div className="bg-gray-100 h-16 w-2/5 absolute top-52 left-4 ml-96 pl-16 rounded-full flex justify-between ">
            <input type="text" placeholder="Enter your email address" className="bg-gray-100 w-96 text-sm"/><button className="text-white font-bold text-sm bg-black 
            rounded-full h-12 my-2 mr-7 p-4 w-44 flex items-center">subscribe Now</button>
            </div>
        </div>

        
        
        </>
    )
 };

 export default Blog;