import * as S from './User.styles';
import userIcon from '../../../../assets/user-icon.svg';

export function User() {
  return (
    <S.Container>
      <S.UserIcon src={userIcon} alt='user icon' />
    </S.Container>
  )
}