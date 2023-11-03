import React from 'react'

function Section() {
  return (
    <>
    <div className='  flex flex-col gap-2 h-24 w-500'>
        <div className='flex flex-col border-2 gap-7 p-7'>
       <div className='text-2xl font-semibold'> Abhyam<br/>
             Institution of Business<br/>
             & Technology!!!<br/>
             </div>
             <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptas molestiae, facere reiciendis non dolor quae itaque nesciunt deserunt quis cupiditate laborum nam a unde rem. Numquam saepe itaque similique.</div>
             <div>
                <button className='capitalize font-extrabold p-6 bg-white text-black rounded-xl'>register</button>
             </div>
             </div>
             <div className='flex flex-col border-2 p-4 gap-6'>
              <div className='text-2xl font-semibold'>
              Powerful Statement About<br/>
              Your Brand Goes<br/>
              Here<br/>
              </div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut blanditiis, sit provident. Lorem ipsum dolor sit amet.</div>
              <div>
             < button className='capitalize font-extrabold p-6 bg-white text-black rounded-xl'>Learn more</button>
              </div>
             </div>
      
    </div>
    
    </>
  )
}

export default Section;
