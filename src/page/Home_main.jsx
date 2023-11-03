import React, { useEffect } from "react";
import { images } from "../components/imagearray";
import { useState } from "react";
import Section from "../componetsection/Section";
import Second from "../componetsection/Second";
import Third from "../componetsection/third";

function Home_main() {
    const [img, inimg]=useState(0)
    const imge=()=>{
        if(img===images.length-1){
            inimg(0)
        }
        else
        {
            inimg(prev=>prev+1)
        }
    }
    useEffect(()=>{
        let imagename=setTimeout(() => {
            imge()
            
        },5000)
        return()=>{
            clearTimeout(imagename)
        }
    })
  return (
    <>
    <div className="ml-24 mt-20 flex flex-row  gap-20 w-screen mb-60">
        <div><Section/></div> 
        <div >
          {
            images.map((val,i)=>{
              if(img===i){
              return<div key={i} ><img src={val.image} className="w-[700px] h-[500px]"/></div>
              }
            })
          }
        </div>
    </div>
    <div className="m-10">
      <div className="flex justify-center my-9">Our Concepts About Learning</div>
      <div>
        <div>
           <Second/>
        </div>
      </div>
    </div>
    <div>
      <Third/>
    </div>
      
    </>
  )
}

export default Home_main;
