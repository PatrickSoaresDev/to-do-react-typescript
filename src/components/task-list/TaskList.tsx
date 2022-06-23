import React from 'react'
import { ITask } from '../../interfaces/ITask'
import Style from './TaskList.module.css'

type Props = {
  tasklist: ITask[]
  handleDelete(id: number): void
  hadleEdit(task: ITask): void
}

const TaskList = ({ tasklist, handleDelete, hadleEdit }: Props) => {
  return (
    <>
      {tasklist.length > 0 ? (
        tasklist.map((task) => (
          <div key={task.id} className={Style.list}>
            <div className={Style.details}>
              <h4>{task.title} </h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={Style.actions}>
              <i className="bi bi-pencil" onClick={() => hadleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDelete(task.id)
                }}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList
