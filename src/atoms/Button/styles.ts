import styled from 'styled-components'

export const Container = styled.button `
  width: 130px;
  height: 42px;

  border: 1px solid #17a4d0;
  border-radius: 5px;
  color: #17a4d0;
  font-size: 14px;

  margin-left: 25px;

  transition: all .2s  ease-out;

  &:hover {
    color: white;
    background-color: #17a4d0;
    box-shadow: 0px 0px 17px -5px #17a4d0;
  }
`
