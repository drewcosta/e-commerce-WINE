import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string ) => void
}

export const SearchInput = (props: InputProps) => {
  return (
    <Container>
      <Input 
        placeholder='Pesquisar'
        // @ts-ignore
        onChange={(event) => props.handleChange(event.target.value)} 
        {...props}
      />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 110px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: auto;

  background-color: #f5f5f5;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,.15);
  z-index: 11;
`
const Input = styled.input`
  width: 74%;
  padding: 15px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  color: #333;
`
