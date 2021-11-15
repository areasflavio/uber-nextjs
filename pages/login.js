import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import tw from 'tailwind-styled-components';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';

import { auth, provider } from '../firebase';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });
  }, [router]);

  return (
    <Container>
      <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.jpg" alt="Uber" />

      <Title>Log in to access you account</Title>
      <LoginImage
        src="https://i.ibb.co/CsV9RYZ/login-image.png"
        alt="Login Image"
      />

      <SignInButtonContainer onClick={() => signInWithPopup(auth, provider)}>
        <SignInButton>Sign in with Google</SignInButton>
      </SignInButtonContainer>
    </Container>
  );
}

const Container = tw.div`
  flex flex-col
  w-full h-screen p-4
  bg-gray-200
`;

const UberLogo = tw.img`
  h-20 w-auto object-contain self-start
`;

const Title = tw.h2`
  pt-4
  text-5xl text-gray-500
`;

const LoginImage = tw.img`
  object-contain w-full
`;

const SignInButtonContainer = tw.div`
  border-t-2 flex
`;

const SignInButton = tw.button`
  w-full
  mx-2 my-4 px-4 py-4
  text-xl text-white
  bg-black
`;
