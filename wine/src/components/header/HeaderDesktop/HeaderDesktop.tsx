import * as S from './HeaderDesktop.styles';
import { Navbar } from '../components/Navbar';
import { Search } from '../components/Search';
import { Store } from '../components/Store';
import { User } from '../components/User';
import logo from '../../../assets/logo.svg';

export function HeaderDesktop() {
  return (
    <S.Container>
      <S.Logo src={logo} alt="Logo" />
      <Navbar />
      <div>
        <Search />
        <User />
        <Store />
      </div>
    </S.Container>
  )
}