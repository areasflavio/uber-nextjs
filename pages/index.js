import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';

export default function Home() {
  return <Container>Hello world</Container>;
}

const Container = tw.div`
  flex flex-col items-center justify-center
  w-full h-screen
  bg-indigo-600
`;
