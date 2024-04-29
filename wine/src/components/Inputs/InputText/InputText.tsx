import * as S from './InputText.styles'
import { InputTextProps } from "./InputText.interfaces"

export const InputText = ({ ...props }: InputTextProps) => {
  return (
    <S.Container>
      <S.InputText {...props} />
    </S.Container>
  )
}