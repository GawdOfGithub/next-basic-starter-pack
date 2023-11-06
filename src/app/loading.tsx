'use client'
import React from 'react'
import  Loader  from './Components/Loader'
const loading = () => {
  return (
    <>
    <div className="z-10 absolute">
     <Loader/>
     </div>
    </>
     )
}

export default loading