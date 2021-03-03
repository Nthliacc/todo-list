import { useState } from 'react';
import { 
  Check, 
  ButtonsContainer,
  InputContainer, 
  InputTaskText, 
  TaskContainer, 
  TaskHeader, 
  TaskText
} from '../styles';

// ICONS
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const TaskCard= ({task, onDelete, taskOperations}) => {
  const [isChecked, setIsChecked] = useState(task.status === 'close' ? true: false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [taskValue, setTaskValue] = useState("");

  const onChangeTask = event => {
    setTaskValue(event.target.value);
  };

  const completedTask = (taskId) => {
    const {tasks, setTasks} = taskOperations;

    const newList = tasks.map((task) => {
      if(task.id !== taskId){
        return task
      } else {
        return {
          ...task,
          status: isChecked === true ? 'open' : 'close'
        }
      }
    });

    setTasks(newList);
    setIsChecked(!isChecked);

    localStorage.removeItem("TODOTASKS");
    localStorage.setItem("TODOTASKS", JSON.stringify(newList));
  };

  const updatedTask = (taskId) => {
    const {tasks, setTasks} = taskOperations;

    const newList = tasks.map((task) => {
      if(task.id !== taskId){
        return task
      } else {
        return {
          ...task,
          text: taskValue
        }
      }
    });

    setTasks(newList);
    setIsUpdate(false);
    localStorage.removeItem("TODOTASKS");
    localStorage.setItem("TODOTASKS", JSON.stringify(newList));
  };
    return (
      <TaskContainer key={task.id}>
        <TaskHeader>
          <Check onClick={() => completedTask(task.id)} isChecked={isChecked}></Check>
          { isUpdate ?
            <InputContainer>
              <InputTaskText defaultValue={task.text} onChange={onChangeTask}/>
              <button onClick={() => updatedTask(task.id)}><CheckIcon/></button>
              <button className="canceled" onClick={() => setIsUpdate(false)}> <CloseIcon/></button>
            </InputContainer>
            :
            <TaskText isChecked={isChecked}>{task.text}</TaskText>
          }
        </TaskHeader>
        <ButtonsContainer>
          <EditIcon onClick={() => setIsUpdate(true)}/>
          <DeleteIcon onClick={() => onDelete(task.id)}/>
        </ButtonsContainer>
      </TaskContainer>
    );
  };