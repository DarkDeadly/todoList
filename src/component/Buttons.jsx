import React from 'react'

const Buttons = ({ButtonText = "Submit" , TextColor = "bg-blue-600" , onClickFn ,hoverBg = 'hover:bg-blue-500'}) => {
  return (
    <div>
      <button onClick = {onClickFn}className={`${TextColor} py-2 px-10 text-xl rounded-lg font-sans ${hoverBg} text-white`}>{ButtonText}</button>
    </div>
  )
}

export default Buttons
