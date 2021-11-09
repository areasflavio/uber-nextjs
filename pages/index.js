import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import tw from 'tailwind-styled-components';

import Map from './components/Map';

export default function Home({ accessToken }) {
  return (
    <Container>
      <Map accessToken={accessToken} />
      <Actions>Actions</Actions>
    </Container>
  );
}

const Container = tw.div`
  flex flex-col
  w-full h-screen
  bg-indigo-600
`;

const Actions = tw.div`
  flex-1
`;

export async function getStaticProps() {
  const accessToken = process.env.MAPBOX_ACCESSTOKEN;

  return {
    props: { accessToken },
  };
}
