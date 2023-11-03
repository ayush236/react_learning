import React from 'react'

function Third() {
  return (
    <>
    <div className='flex flex-row  gap-10 bg-gray-200 w-screen'>
        <div className='w-[700px]'><img src='./image/whiteBg.webp'/></div>
        <div>
            <div className='font-extrabold text-5xl mb-7'>Benifits Of<br/>
                 Wellbeing And<br/>
                 Positive Business.<br/>
             </div>
             <div className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Libero ducimus debitis rem sunt facilis dolorem natus mollitia<br/> obcaecati voluptatibus pariatur error dolore ratione porro.<br/></div>
             <div><button className='bg-orange-500 text-white font-bold'>Register</button></div>
             <div className='flex flex-row gap-9 my-6'>
                <div>30+
                    <span>project<br/>
                    Finished<br/>
                    </span>
                </div>
                <div>100%
                    <span>Client<br/>
                    Satisfaction<br/>
                    </span>
                </div>
                <div>100+
                    <span>Total Student<br/>
                    Available<br/>
                    </span>
                </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Third;
