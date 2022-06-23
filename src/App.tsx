import React, { useState } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import styles from './App.module.css'
import TaskForm from './components/task-form/TaskForm'
import { ITask } from './interfaces/ITask'
import TaskList from './components/task-list/TaskList'
import Modal from './components/modal-edit/Modal'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')
    if (display) {
      modal?.classList.remove('hide')
    } else {
      modal?.classList.add('hide')
    }
  }

  const editTask = (task: ITask): void => {
    setTaskToUpdate(task)
    hideOrShowModal(true)
  }

  const updateTask = (id: number, title: string, difficulty: number): void => {
    const updateTask: ITask = { id, title, difficulty }
    const updatedItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task
    })

    setTaskList(updatedItems)
    hideOrShowModal(false)
  }

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Tarefa</h2>
          <TaskForm
            btnText="Criar Terefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            tasklist={taskList}
            handleDelete={deleteTask}
            hadleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
