import styled, { css } from 'styled-components'
import { ButtonProps } from './Buttons'

const Color = css`
  background-color: #276ba7;
  &:hover {
    background-color: #14426b;
  }
`
const Disabled = css`
  cursor: not-allowed;
`

export const Container = styled.button<ButtonProps>`
  padding: 8px;
  height: 30px;
  margin: 0px 5px;
  background-color: #276ba7;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  cursor: pointer;

  ${(props) => props.color && Color[props.color]}
  ${(props) => props.disabled && Disabled}
`
