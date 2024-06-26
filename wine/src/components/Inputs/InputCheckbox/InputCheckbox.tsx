import * as S from './InputCheckbox.styles'
import { InputCheckboxProps } from './InputCheckbox.interfaces'

export const InputCheckbox = ({ label, ...props }: InputCheckboxProps) => {
  return (
    <S.Container {...props}>
      <S.Checkbox {...props} id={label} ></S.Checkbox>
      <label htmlFor={label}>{label}</label>
    </S.Container>
  )
}