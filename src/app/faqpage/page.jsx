import React from 'react'
import FAQ from '@/components/faq/FAQ'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <div className= "h-full bg-sfDarkPurp">
      <div className='p-5'>
    <Navbar/>    
      </div>
      
        <FAQ/>
    </div>
  )
}

export default page