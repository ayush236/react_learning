import { ImLocation2 } from 'react-icons/im';
import React, { Children } from "react";
import {BiSolidPhoneCall} from  'react-icons/bi';
import {HiMail} from 'react-icons/hi';
import {BsFacebook} from  'react-icons/bs';
import {BiLogoInstagramAlt} from 'react-icons/bi';
import {IoLogoWhatsapp} from 'react-icons/io';
import{TiSocialYoutube} from 'react-icons/ti';
function ContactUs(){
    return(
        <>
        <div className="w-full p-5 m-auto mb-10 pl-20">
        <div className="grid grid-cols-2 gap-2 w-full">
            {/* section 1 */}
            <div className='font-bold flex flex-col gap-9 w-10/12  '>
            <div className='text-4xl font-bold gap-1'>
                <h1>Lets chat</h1>
                  <h1>Tell me about your</h1>
                   <h1>Project or Our Service.</h1>
            </div>
            <div className='text-lg indent-3 text-think'>
                Let's build something together.
            </div>
            {/* display icon */}
            <div className='flex flex-col gap-20'>
            {/* display icons 1*/}
            <div className='flex gap-6 bg-gray-50 shadow-xl w-11/12z rounded-md h-20'>
                {/* left icons */}
                <div className='bg-gray-400 flex justify-center items-center w-fit h-fit text-2xl ml-6 my-4 rounded-md'>
                <div className='p-3 '>
                    <ImLocation2 className='flex justify-center items-center text-blue-800'/>
                </div>
                </div>
                {/* right icons */}
                <div className='flex flex-col justify-center '>
                    <h1 className='font-bold text-2xl whitespace-break-space capitalize text-black'>visit us at</h1>
                    <p className='text-base capitalize font-normal'>yogikuti( near khani pani ), rupendehi</p>

                </div>

            </div>
            {/* display icons 2 */}
            <div className='flex gap-6 bg-gray-50 shadow-xl w-11/12z rounded-md h-20'>
                {/* left icons */}
                <div className='bg-gray-400 flex justify-center items-center w-fit h-fit text-2xl ml-6 my-4 rounded-md'>
                <div className='p-3 '>
                    <BiSolidPhoneCall className='flex justify-center items-center text-blue-800'/>
                </div>
                </div>
                {/* right icons */}
                <div className='flex flex-col justify-center '>
                    <h1 className='font-bold text-2xl whitespace-break-space capitalize text-black'>call at</h1>
                    <p className='text-base capitalize font-normal'>9852897650 / 9818650267</p>

                </div>

            </div>
            {/* display icons 3 */}
            <div className='flex gap-6 bg-gray-50 shadow-xl w-11/12z rounded-md h-20 '>
                {/* left icons */}
                <div className='bg-gray-400 flex justify-center items-center w-fit h-fit text-2xl ml-6 my-4 rounded-md'>
                <div className='p-3 '>
                    <HiMail className='flex justify-center items-center text-blue-800'/>
                </div>
                </div>
                {/* right icons */}
                <div className='flex flex-col justify-center '>
                    <h1 className='font-bold text-2xl whitespace-break-space capitalize text-black'>mail us at</h1>
                    <p className='text-base capitalize font-normal'>logo@email.com</p>

                </div>

            </div>
            </div>
            </div>
        {/* section 2 */}
        <div className="  w-4/5 h-auto capitalize shadow-xl py-5 px-7 rounded-lg border  ">
        
        <div className="  grid  grid-cols gap-4">
            <h1 className="text-xl">send us message</h1>
            <input type="text" placeholder="Your Name" className="outine-none rounded-md px-2 py-4 border border-gray-400"/>
            <input type="text" placeholder="your email" className="outine-none rounded-md px-2 py-4 border border-gray-400" />
           <textarea rows={8} placeholder="messaage" className="outline-none rounded-md px-2 py-4 border border-gray-400 resize-none "/>
           <input type="submit" name="submit" className="w-full bg-green-500 p-2 rounded-md text-white hover:bg-orange-500"/>
           <div className=" flex flex-row w-full items-center justify-center gap-5">
            <div className="bg-slate-500 h-0.5 w-40"></div>
            <div className="font-semibold">Find us</div>
            <div className="bg-slate-500 h-0.5 w-40"> </div>
           </div>
           <div className='flex justify-center gap-4 text-3xl  '>
            <BsFacebook className=''/>
            <BiLogoInstagramAlt className=''/>
            <IoLogoWhatsapp className=' '/>
            <TiSocialYoutube className=' '/>
           </div>
        </div>
        </div>
        </div>
        </div>
        {/* mapping frame */}
        <div className=" w-11/12 m-auto h-96  px-5">
        <iframe className="w-full h-full " src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14128.591429865532!2d83.47501369999999!3d27.712720750000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1689736787456!5m2!1sen!2snp"  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        </>
        
    );
}
export default ContactUs;