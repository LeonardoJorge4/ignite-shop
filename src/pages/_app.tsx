import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

import logoSvg from '../assets/logo.svg';
import { Container, Header } from '../styles/pages/app';
import Image from 'next/image';
import Link from 'next/link';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image
            src={logoSvg.src}
            alt="Logo"
            width={129}
            height={52}
          />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
