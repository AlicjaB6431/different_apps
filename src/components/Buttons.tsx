import { FC } from 'react'
import styled, { css } from 'styled-components'

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  size?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'submit' | 'reset' | 'button'
}

const Buttons: FC<ButtonsProps> = ({ color, size, onClick, type, disabled, ...props }) => {
  return (
    <ButtonsContainer
      {...props}
      disabled={disabled}
      color={color}
      onClick={onClick}
      type={type}
      size={size}
    ></ButtonsContainer>
  )
}

export default Buttons

const ButtonsContainer = styled.button<ButtonsProps>`
  padding: 8px;
  margin: 0px 5px;
  background-color: #276ba7;
  color: white;
  border: none;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #14426b;
  }

  ${({ size }) =>
    size === 'large'
      ? css`
          width: 120px;
          height: 30px;
        `
      : css`
          width: 100px;
          height: 30px;
        `}
  ${({ color }) =>
    color === 'primary'
      ? css`
          background-color: #276ba7;
          &:hover {
            background-color: #14426b;
          }
        `
      : css`
          background-color: #7827a7;
          &:hover {
            background-color: #410b52;
          }
        `}
`
