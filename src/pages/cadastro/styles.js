import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0d0225;
  color: white;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Title = styled.h2`
  max-width: 400px;
  font-size: 1.5rem;
  line-height: 1.6;
`;

export const RightSide = styled.div`
  flex: 1;
  background-color: #150035;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  h3 {
    margin-bottom: 8px;
  }
`;

export const SubTitle = styled.p`
  margin: 8px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Input = styled.input`
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 6px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #e21e63;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #c2185b;
  }
`;

export const Terms = styled.p`
  font-size: 0.8rem;
  margin-top: 12px;
`;

export const LoginText = styled.p`
  font-size: 0.8rem;
  margin-top: 12px;
`;

export const Link = styled.a`
  color: #30f89d;
  text-decoration: none;
`;
