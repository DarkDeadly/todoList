import React from 'react'
import Buttons from './Buttons'

const TaskList = ({taskText , deletefn ,editfn}) => {
  return (
    <div className='flex items-center mb-2'>
      <h1 className='text-xl font-serif mt-2 py-5 bg-white w-full inline-block pl-5 rounded-2xl'>{taskText}</h1>
      <div className="absolute right-36 flex gap-4">
      <Buttons  ButtonText='Delete' TextColor='bg-red-600' hoverBg='hover:bg-red-400' onClickFn={deletefn}/>
      <Buttons  ButtonText='Edit' TextColor='bg-blue-600' hoverBg='hover:bg-blue-400' onClickFn={editfn}/>

      </div>
    </div>
  )
}

export default TaskList
