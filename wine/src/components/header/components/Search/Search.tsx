import * as S from './Search.styles';
import { ChangeEvent, useState } from "react";
import { InputText } from '@/components/Inputs';
import { useFilter } from "@/hooks/useFilter";
import lupa from '../../../../assets/lupa-icon.svg';

export function Search() {
  const { search, setSearch } = useFilter();
  const [show, setShow] = useState(false);

  function toogleShow() {
    setShow(prev => !prev);
  }

  function changeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
      <S.Container>
        <S.SearchIcon src={lupa} alt='' onClick={toogleShow} />
      </S.Container>
      {show &&
        <InputText
          value={search}
          onChange={changeSearch}
          $SearchWine
        />
      }
    </>
  )
}