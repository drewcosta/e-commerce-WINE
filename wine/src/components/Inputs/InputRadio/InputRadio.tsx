import * as S from './InputRadio.styles'
import { InputRadioProps } from './InputRadio.interfaces'

export const InputRadio = ({ label, ...props }: InputRadioProps) => {
  return (
    <S.Container {...props}>
      <S.Radio {...props} id={label} ></S.Radio>
      <label htmlFor={label}>{label}</label>
    </S.Container>
  )
}