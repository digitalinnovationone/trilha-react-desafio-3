import React from 'react'
import {IButton} from './types'
import { ButtonContainer } from './styles';

const Button = ({title,variant = "primary", onClick}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

export { Button }
