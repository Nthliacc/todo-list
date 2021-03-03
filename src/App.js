import styled from 'styled-components';
import { ListTasks } from './components/ListTasks';

const Container = styled.main`
  height: 100vh;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.black};
`;

export const App = () => {
  return (
    <Container>
      <ListTasks/>
    </Container>
  );
};