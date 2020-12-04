import styled from 'styled-components';

export const Button = styled.button`
  width: 70%;
  margin: auto;
  background-color: #6ACB25;
  border-radius: 30px;
  border: 2px solid transparent;
  padding: 1rem;
  font-size: 1rem;
  color: white;
  box-sizing: border-box;
  font-weight: 700;
  transition: 0.4s all;
  outline: none;
  &:hover {
    background-color: transparent;
    border-color: #6ACB25;
    color: #6ACB25;
    cursor: pointer;
  }
`

export const ButtonOutline = styled.button`
  width: 70%;
  margin: auto;
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid #6ACB25;
  padding: 1rem;
  font-size: 1rem;
  color: #6ACB25;
  box-sizing: border-box;
  font-weight: 700;
  transition: 0.4s all;
  outline: none;
  &:hover {
    background-color: #6ACB25;
    border-color: #6ACB25;
    color: white;
    cursor: pointer;
  }
`

export const ButtonLine = styled.button`
  width: 70%;
  margin: auto;
  background-color: transparent;
  padding: 1rem 0;
  font-size: 1em;
  color: #196E91;
  box-sizing: border-box;
  font-weight: 700;
  transition: 0.4s all;
  border: none;
  outline: none;
  
  &:hover {
    color: #29ABE2;
    cursor: pointer;
  }
`