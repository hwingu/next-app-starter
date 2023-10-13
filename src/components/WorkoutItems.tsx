import React from 'react'
import Image from 'next/image'
import {Heart} from "lucide-react"


type Props = {}

const WorkoutItems = (props: Props) => {
  return (
    <div className='relative text-sm border border-slate-400 gap-x-6 rounded-md mt-2'>
        <div className='h-36 w-full bg-red-500 rounded-tr-md'></div>
        <div className='flex p-3 text-center items-center justify-around'>
            <h1 className='font-semibold text-lg '>PPL</h1>
            <div className=''>
                <h1>Frequency</h1>
                <p>6</p>
            </div>
            <div className=''>
                <h1>Frequency</h1>
                <p>6</p>
            </div>
            <div className=''> 
                <h1>Frequency</h1>
                <p>6</p>
            </div>
            <Heart></Heart>
        </div>
    </div>
  )
}

export default WorkoutItems