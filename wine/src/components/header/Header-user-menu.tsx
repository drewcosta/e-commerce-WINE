import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import user from '../../assets/user-icon.svg'


export const HeaderUserMenu = () => {
  return (
    <UserContainer>
      <User src={user} alt='' />
    </UserContainer>
  )
}

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 2px solid var(--gray-default);
`

const User = styled(Image)`
    position: relative;
    top: 5px;
    cursor: pointer;
`
