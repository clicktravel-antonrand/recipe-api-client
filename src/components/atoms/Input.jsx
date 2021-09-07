import styled, { css } from 'styled-components'

export const Input = styled.input`
  padding: 0.6em 0.5em;
  background-color: #fff;
  border: 2px solid #797979;
  border-radius: 4px;
  transition: 180ms box-shadow ease-in-out;
  min-width: 300px;
  margin-right: 5px;
  display: inline-block;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`
