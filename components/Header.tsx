import Link from 'next/link';
import * as React from 'react';
import { HeaderDiv } from '../styles/components/HeaderDiv';
import { HeaderLink } from '../styles/components/HeaderLink';

export const Header = () => (
  <HeaderDiv>
    <Link href="/">
      <HeaderLink>Home</HeaderLink>
    </Link>
    <Link href="/contact">
      <HeaderLink>Contact</HeaderLink>
    </Link>
  </HeaderDiv>
);
