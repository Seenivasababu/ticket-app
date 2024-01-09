import React from 'react'
import { FaFire } from 'react-icons/fa'

const PriorityDisplay = ({priority}:{priority:any}) => {
  return (
    <div className='text-red-500 flex justify-start align-baseline'>
      <div className={`pr-1 ${priority > 0 ? "text-red-400":"text-slate-400"}`}><FaFire/></div>
      <div className={`pr-1 ${priority > 1 ? "text-red-400":"text-slate-400"}`}><FaFire/></div>
      <div className={`pr-1 ${priority > 2 ? "text-red-400":"text-slate-400"}`}><FaFire/></div>
      <div className={`pr-1 ${priority > 3 ? "text-red-400":"text-slate-400"}`}><FaFire/></div>
      <div className={`pr-1 ${priority > 4 ? "text-red-400":"text-slate-400"}`}><FaFire/></div>
      
    </div>
  )
}

export default PriorityDisplay