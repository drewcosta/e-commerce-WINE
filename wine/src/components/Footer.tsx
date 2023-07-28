'use client'
import React, { useEffect, useState } from 'react'
import { FooterFilter } from './Footer-filter'
import styled from 'styled-components';

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <FooterFilter />
      ) : (
        <Container />
      )}
    </>
  );
};

const Container = styled.footer``

