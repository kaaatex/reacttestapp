import { useState } from 'react'
import './App.css';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'


const App = () => { 
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30PM' ,
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30PM' ,
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30PM' ,
        reminder: false,
    }
])
  
//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTasks ([...tasks, newTask])
}
//Delete Task
const deleteTask =  (id) => {
  setTasks(tasks.filter((task) => task.id !== id)) 
}

//toggleReminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className='container'>

      <Header onAdd = {() => setShowAddTask(showAddTask = !showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Available' 
      }
    </div>
  );
}


export default App;
