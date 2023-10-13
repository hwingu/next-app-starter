import React from 'react'
import { Button } from './ui/button'
import CreateWorkoutForm from './CreateWorkoutForm'

type Props = {}

const CreateWorkoutSection = (props: Props) => {
  return (
    <div className='col-span-2'>
        <div className='flex justify-between items-center text-center'>
            <div className='flex gap-x-3 items-center'>
                <Button>{"<"}</Button>
                <div className='text-sm'>Day 1</div>
                <Button>{">"}</Button>
            </div>
            <h1 className='font-bold text-2xl'>Push</h1>
            <Button>Copy</Button>
        </div>
        <CreateWorkoutForm />
    </div>
  )
}

export default CreateWorkoutSection