import styled from 'styled-components';

// ------ List Tasks

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  align-items: center;
`;
export const ListContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 24px;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.grey};
`;

export const AddTaskContainer = styled.form`
  color: ${({ theme }) => theme.orange};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 50%;
  height: 68px;
  button{
    width: 42px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.orange};
    padding-top: 1px;
    :hover{
      transition: 0.5s;
      cursor: pointer;
      color: ${({ theme }) => theme.white};
    }
  }
  input{
    padding: 8px;
    border-radius: 8px;
    border: none;
    width: 100%;
    height: 100%;
    :focus{
      outline: thin dotted;
      outline: 0px auto -webkit-focus-ring-color;
      outline-offset: 0px;
    }
  }
`;

// ------ TaskCard

export const Check = styled.div`
  border: 2px solid ${({ isChecked, theme }) => isChecked ? theme.orange : theme.black};
  background-color: ${({ isChecked, theme }) => isChecked ? theme.orange : theme.white};
  border-radius: 25%;
  height: 14px;
  width: 14px;
  cursor: pointer;
  :hover{
      background-color: ${({ theme, isChecked }) => isChecked ? theme.white : theme.orange} ;
    }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 60px;
  width: 400px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.grey};
  background-color: ${({ theme }) => theme.white};
`;

export const TaskHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const TaskText = styled.p`
  text-decoration: ${({ isChecked }) => isChecked ? 'line-through' : 'none'};
`;
export const InputContainer = styled.p`
  display: flex;
  gap: 6px;
  button{
    width: 22px;
    height: 22px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.green};
    svg{
      width: 20px;
      height: 20px;
    }
    :hover{
      color: ${({ theme }) => theme.black}
    }
  }
  .canceled{
    background-color: ${({ theme }) => theme.pink};
    color: #eee
  }
`;
export const InputTaskText = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.white};
  //padding: 4px;
  :focus{
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;
export const ButtonsContainer = styled.div`
  svg{
    cursor: pointer;
    :hover{
      color: ${({ theme }) => theme.orange};
    }
  }
`;