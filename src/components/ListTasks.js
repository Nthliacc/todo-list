import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { initialValue } from '../Constants';
import { Container, AddTaskContainer, Line, ListContainer } from '../styles';
import AddIcon from '@material-ui/icons/Add';

export const ListTasks = () => {
  const [tasks, setTasks] = useState(initialValue || []);
  const [taskValue, setTaskValue] = useState("");

  const onChangeTask = event => {
    setTaskValue(event.target.value);
  };

  const addTask = () => {
    const taskList = [...tasks, {id: Math.random(), text: taskValue, status: 'open'}];
    localStorage.setItem("TODOTASKS", JSON.stringify(taskList));
    
    setTasks(taskList);
  }

  const deleteTask = (id) => {
    const taskList = tasks.filter((task) => {
      return task.id !== id;
    });
    
    localStorage.removeItem("TODOTASKS");
    localStorage.setItem("TODOTASKS", JSON.stringify(taskList));

    setTasks(taskList);
  }
    return (
      <Container>
        <AddTaskContainer onSubmit={addTask}>
          <input 
            type="text" 
            placeholder={'Adicionar tarefa'}
            onChange={onChangeTask}
          />
          <button type={'submit'}>
            <AddIcon/>
          </button>
        </AddTaskContainer>
        <Line/>
        { tasks.length > 0 ? 
          <ListContainer>
            <div>
              <h2>Tarefas - {tasks?.filter(task => task.status === 'open').length}</h2>
              {tasks
                .filter(task => task.status === 'open')
                .map(task => (
                  <TaskCard 
                    key={task.id} 
                    task={task}
                    onDelete={deleteTask}
                    taskOperations={{tasks, setTasks}}
                  />
                ))
              }
            </div>

            <div>
              <h2>Tarefas Concluídas - {tasks?.filter(task => task.status === 'close').length}</h2>
              {tasks
                ?.filter(task => task.status === 'close')
                ?.map(task => (
                  <TaskCard 
                    key={task.id} 
                    task={task}
                    onDelete={deleteTask}
                    taskOperations={{tasks, setTasks}}
                  />
                ))
              }
            </div>
          </ListContainer>
          :
          <div>
            <h1>Adicione tarefas</h1>
          </div>
        }
      </Container>
    );
  };