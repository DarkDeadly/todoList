import { useState } from 'react'
import './App.css'
import Buttons from './component/Buttons'
import TaskList from './component/TaskList'
function App() {
  const [inputs, setInputs] = useState("")
  const [todos, setTodos] = useState([])
  const handleChanges = (e) => {
    setInputs(e.target.value)
  }
  const handleClicks = (e) => {
    e.preventDefault();
    if(inputs.trim() !=="") {
      setTodos([...todos, inputs])
      setInputs("")
    }
  }
  const handleDelete = (taskid) => {
   const updatedTask = todos.filter((_,index) => index !== taskid) ;
   setTodos(updatedTask)
   console.log(todos)
  }
  return (
    <div className="content min-h-screen w-full flex ">
      <div className="leftContent  w-[10%] bg-cyan-700 mr-2 rounded-tr-xl rounded-br-xl"></div>
      <div className="rightcontent  w-full bg-slate-300 rounded-tl-xl rounded-bl-xl p-12">
        <h1 className='font-bold text-4xl font-serif'>Task Management System</h1>
        <div className="button flex pt-9">
          <input type="text"
            className='rounded-md pr-20 pl-5 mr-5 font-sans text-lg'
            placeholder='enter your task'
            onChange={handleChanges}
            value={inputs}
          />
          <Buttons onClickFn={handleClicks} />
        </div>
        <div className="TaskList">
          {
            todos.map((todo, id) => (
              <TaskList taskText={todo} key={id} deletefn={() => handleDelete(id)} />
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default App
