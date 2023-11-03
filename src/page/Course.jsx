import React from "react";
import background from  "../pngegg.png"; 
import Web_development from "../coursesfile/web_development";
import Excel from "../coursesfile/Sec_ond";
import {RiDoubleQuotesL} from "react-icons/ri"
import { useState } from "react";
import {BsFillPlayCircleFill} from "react-icons/bs";

 function Course(){
    const [select, click]=useState('python');
       return(
        <>
        {/* first section  back ground image */}
        <div className="flex relative  ">
            <div className=" bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 h-96 w-full "></div>
            <div className="absolute z-10 top-0 flex w-11/12 justify-between px-10">
                <div className="flex gap-20 items-start justify-center flex-col p-10 h-full w-4/5  ">
                    <div className="text-5xl">Education Is <br/> About Academic Excellence!</div>
                < div className=" flex gap-10">
            <button className=" bg-blue-800 capitalize border-black border-1 rounded-md h-12 w-28 shadow-sm font-semibold text-white ">Apply Now </button>
            <button className="bg-white  border-black border-1 rounded-md h-12 w-28 shadow-sm font-semibold ">Take a view</button>
            </div>
            </div> 
            <div className="w-96"><img src={background} alt="image" className="h-96 "/></div>
            </div>
        </div>
        {/* second  section */}
        <div className="flex flex-col gap-6 p-4 mt-12">
            <h1 className="text-3xl font-extrabold tracking-widest capitalize">A broude selection of courses</h1>
            <h5 className="text-4xl font-thin capitalize">choose from over 210,000 online video courses with new addittions published every month</h5>
        </div >
        {/* third section of linking */}
        <div className="pl-6 font-bold flex gap-6">
               <div onClick={()=>{
                    click('python');
               }}  > Python</div>
                <div onClick={()=>{
                    click('excel');
               }}  >Excel</div>
                <div onClick={()=>{
                    click('web_development');
                }} > Web Development</div>
                <p>Javascript</p>
                <p>Data Science</p>
        </div>
        {/* fourth section of box */}
   
         {

            select==='python'?   
             <div className="border-2 border-black p-5 m-5">
            {/* first part */}
            <div className="text-2xl font-semibold mb-2">Expand your career opportunities with Python</div>
            {/* second  part */}
            <div>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its<br/> simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll<br/> learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to..</div>
            {/* third part */}
            <div className="mt-4">
                <button className="border-2 border-black w-32 h-12 hover:bg-gray-300 ">Explore Python</button>
            </div >
     <div className="grid grid-cols-5 gap-4 ">
            {/* fouth part card haru */}
            <div className="mt-8 " >
                {/* first card */}
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/firstcard.jpg" alt="firstcard" className="border-2 W-60 h-32 "/>
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
            <div className="mt-8" >
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/sixthcard.jpg " alt="secondcard" width={240}  className="border-2  h-32"/>
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
                    <img src="./card/thirdcard.webp" alt="firstcard" className="border-2 W-60 h-32"/>
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
                    <img src="./card/fourthcard.png" alt="firstcard" className="border-2 W-60 h-32"/>
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
                    <img src="./card/fifthcard.png" alt="firstcard" className="border-2 W-60 h-32"/>
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
            :select==='excel'? <div> <Excel/> </div>
            :select==='web_development'? <div> <Web_development/> </div>
            :
            <div></div>
             }
             {/* fifth section  */}
             <div  className="bg-gray-200 px-6 w-full h-full">
                {/* first part */}
                <div className="pt-12">
                <div className="font-bold text-2xl">How learners like you are achieving their goals</div>
                {/* second part */}
                <div className="flex flex-row gap-5 pt-7 pb-8">
                    <div height={389} width={331} className=" bg-white flex flex-col gap-4 border-2 p-2 ">
                        <div className="text-2xl">
                        <RiDoubleQuotesL/>
                        </div>
                        <div className="text-sm">I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.</div>
                     <div><span className="bg-black text-white font-bold rounded-full p-1">WA</span>Will A</div>
                     <div className="h-0.5 w-full bg-slate-500"></div>
                     <div className="flex gap-4 items-center text-purple-700  hover:text-purple-900">
                        <div className="text-2xl"><BsFillPlayCircleFill/></div>
                        <div className="font-bold">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</div>
                     </div>
                     </div>
                     {/* second  */}
                     <div height={389} width={331} className=" bg-white flex flex-col gap-4 border-2 p-2 ">
                        <div className="text-2xl">
                        <RiDoubleQuotesL/>
                        </div>
                        <div className="text-sm">I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.</div>
                     <div><span className="bg-black text-white font-bold rounded-full p-1">WA</span>Will A</div>
                     <div className="h-0.5 w-full bg-slate-500"></div>
                     <div className="flex gap-4 items-center text-purple-700  hover:text-purple-900">
                        <div className="text-2xl"><BsFillPlayCircleFill/></div>
                        <div className="font-bold">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</div>
                     </div>
                     </div>
                     {/* third */}
                     <div height={389} width={331} className=" bg-white flex flex-col gap-4 border-2 p-2 ">
                        <div className="text-2xl">
                        <RiDoubleQuotesL/>
                        </div>
                        <div className="text-sm">I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.</div>
                     <div><span className="bg-black text-white font-bold rounded-full p-1">WA</span>Will A</div>
                     <div className="h-0.5 w-full bg-slate-500"></div>
                     <div className="flex gap-4 items-center text-purple-700  hover:text-purple-900">
                        <div className="text-2xl"><BsFillPlayCircleFill/></div>
                        <div className="font-bold">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</div>
                     </div>
                     </div>
                     </div>
                </div>
             </div>
             {/* sixth section */}
             <div className="pt-5 m-8 ">
                {/* innerpart */}
                <div className="mx-11">
                    {/* student */}
                    <div className="font-bold text-xl">Student are viewing</div>
                    {/* card haru */}
                    <div className="flex flex-row gap-5 mt-2">
                        {/* first card */}
                    <div>
                {/* upper card */}
                <div>
                    <img src="./card/top11.png" alt="firstcard" className="border-2 W-ful h-32 "/>
                </div>
                {/* lower card */}
                {/* lower first part */}
                <div className="font-bold"> The Complete Python<br/>
                Bootcamp from Zero to <br/>Hero..
                </div>
                {/* lower second part */}
                <div className="font-thin text-sm">Ayush khatri</div>
                {/* lower third part */}
                <div className="font-thin text-md">Inroll(123,890)</div>
                {/* lower  fourth part*/}
                <div className="font-bold text-xl">$16.99</div>
                {/* lower fifth part */}
                <div>
                    <span className="bg-yellow-700 text-yellow-600 text-sm p-0.5">Bestseller</span>
                </div>
                </div>
                {/* second card */}
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/excelfirst.jpg" alt="firstcard" className="border-2 W-60 h-32 "/>
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
                <span className="bg-yellow-700 text-yellow-600 text-sm p-0.5">Bestseller</span>
                </div>
                </div>
                {/* third card */}
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/zd-ultimate-excel-bundle.webp" alt="firstcard" className="border-2 W-60 h-32 "/>
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
                <span className="bg-yellow-700 text-yellow-600 text-sm p-0.5">Bestseller</span>
                </div>
                </div>
                {/* fouth card */}
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/top17.jpg" alt="firstcard" className="border-2 W-60 h-32 "/>
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
                <span className="bg-yellow-700 text-yellow-600 text-sm p-0.5">Bestseller</span>
                </div>
                </div>
                {/* fifth card */}
                <div>
                {/* upper card */}
                <div>
                    <img src="./card/top14.jpg" alt="firstcard" className="border-2 W-60 h-32 "/>
                </div>
                {/* lower card */}
                {/* lower first part */}
                <div className="font-bold"> The Complete web<br/>
                development from Zero to Hero..
                </div>
                {/* lower second part */}
                <div className="font-thin text-sm">Ayush khatri</div>
                {/* lower third part */}
                <div className="font-thin text-md">Inroll(123,890)</div>
                {/* lower  fourth part*/}
                <div className="font-bold text-xl">$16.99</div>
                {/* lower fifth part */}
                <div>
                <span className="bg-yellow-700 text-yellow-600 text-sm p-0.5">Bestseller</span>
                </div>
                </div>
                </div>
                </div>
             </div>
             {/* seventh section */}
             <div className=" mt-13 p-16">
                <div className="font-bold text-2xl">Top Categories</div>
                <div className=" pt-3 flex flex-row gap-8">
                    <div>
                        <div><img src="./card/des.jpg"/></div>
                        <div className="font-bold">Design</div>
                    </div>
                    <div>
                        <div><img src="./card/lohp-category-business-v2.jpg"/></div>
                        <div className="font-bold">Business</div>
                    </div>
                    <div>
                         <div><img src="./card/lohp-category-development-v2.jpg"/></div>
                         <div className="font-bold">Develpment </div>
                    </div>
                    <div>
                        <div><img src="./card/lohp-category-it-and-software-v2.jpg"/></div>
                        <div className="font-bold">Software</div>
                    </div>
                </div>
                <div className=" pt-6 flex gap-8">
                    <div>
                        <div><img src="./card/lohp-category-marketing-v2.jpg"/></div>
                        <div className="font-bold">Marketing</div>
                    </div>
                    <div>
                        <div><img src="./card/lohp-category-music-v2.jpg"/></div>
                        <div className="font-bold">Music</div>
                    </div>
                    <div>
                        <div><img src="./card/lohp-category-photography-v2.jpg"/></div>
                        <div className="font-bold">Photography</div>
                    </div>
                    <div>
                    <div><img src="./card/lohp-category-personal-development-v2.jpg"/></div>
                    <div className="font-bold">Personal development</div>
                    </div>
                </div>
             </div>
             {/* 8 section */}
             <div className="bg-gray-100 pt-10 pb-14">
                {/* top part */}
                <div className="font-bold text-xl pl-16">Featured topics by category</div>
                {/* mibble part */}
                <div className="pt-8 flex justify-around ">
                    {/* first column */}
                    <div className="flex flex-col gap-7">
                    <div className="font-bold">Development</div>
                    {/* column */}
                    <div className="">
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">python</div>
                        <div className="font-thin">36,345,994 student</div>
                    </div>
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Web Development</div>
                        <div className="font-thin">11,345,994 student</div>
                    </div>
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Machine Learning</div>
                        <div className="font-thin">7,345,994 student</div>
                    </div>
                    </div>
                    {/* second column */}
                    <div className="flex flex-col gap-7">
                    <div className="font-bold">Business</div>
                    {/* column */}
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Financial Analysis</div>
                        <div className="font-thin">1,233,323 student</div>
                    </div>
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">SQL</div>
                        <div className="font-thin">14,345,978 student</div>
                    </div>
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">PMP</div>
                        <div className="font-thin">18,345,502 student</div>
                    </div>
                    </div>
                    {/* third part */}
                    <div className="flex flex-col gap-7">
                    <div className="font-bold">IT abd Software</div>
                    {/* column */}
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Amazon AWS</div>
                        <div className="font-thin">6,345,994 student</div>
                    </div>
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Ethical Hacking</div>
                        <div className="font-thin">10,345,994 student</div>
                    </div>
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Cyber Security</div>
                        <div className="font-thin">3,345,994 student</div>
                    </div>
                    </div>
                    {/* fourth column */}
                    <div className="flex flex-col gap-7">
                    <div className="font-bold">Design</div>
                    {/* column */}
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Photoshop</div>
                        <div className="font-thin">9,345,994 student</div>
                    </div>
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Graphic Design</div>
                        <div className="font-thin">1,345,994 student</div>
                    </div>
                    <div>
                        <div className="font-bold underline text-purple-500 hover:text-purple-700">Drawing</div>
                        <div className="font-thin">56,345,994 student</div>
                    </div>
                    </div>
                </div>
                {/* fourth parth */}
                <div>
                    <button className="border-2 border-black font-thin ml-20 mt-12 w-40 text-sm h-8 hover:bg-slate-400 hover:text-white">Explore more Topics</button>
                </div>
             </div>
             
        </>
    )
 };
 export default Course;