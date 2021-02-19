import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 250px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;

    h2 {
      font-weight: 500;
      font-size: 18px;
      padding: 0 10px;
    }

    button {
      width: 30px;
      height: 30px;
      border-radius: 20px;
      background: #007FFF;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
