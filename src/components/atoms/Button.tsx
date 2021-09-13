import styled, { css } from 'styled-components'

type ButtonProps = {
  primary?: boolean
  secondary?: boolean
  danger?: boolean
}

export default styled.button<ButtonProps>`
  background: #3cbbb1;
  border-radius: 3px;
  border: 2px solid #3cbbb1;
  color: white;
  font-size: 18px;
  margin-right: 0.25em;
  margin-bottom: 1em;
  padding: 0.25em 1em;

  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}

  ${(props) =>
    props.secondary &&
    css`
      border: 2px solid #4eb6ee;
      background: #4eb6ee;
    `}

  ${(props) =>
    props.danger &&
    css`
      border: 2px solid #fc5271;
      background: #fc5271;
    `}
`
