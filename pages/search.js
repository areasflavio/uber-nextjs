import React from 'react';
import Link from 'next/link';

import tw from 'tailwind-styled-components';

export default function Search() {
  return (
    <Container>
      <Link href="/" passHref>
        <ButtonContainer>
          <BackButtonImage
            src="https://img.icons8.com/ios-filled/50/00000/left.png"
            alt="Back"
          />
        </ButtonContainer>
      </Link>

      <InputContainer>
        <FromToIcons>
          <From
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            alt="From"
          />
          <Line
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            alt="Line"
          />
          <To
            src="https://img.icons8.com/windows/50/00000/square-full.png"
            alt="To"
          />
        </FromToIcons>

        <InputBox>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBox>

        <PlusIcon src="https://img.icons8.com/ios/50/00000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>

      <ConfirmButton>Confirm Locations</ConfirmButton>
    </Container>
  );
}

const Container = tw.div`
  flex flex-col
  w-full h-screen
  bg-gray-200
`;

const ButtonContainer = tw.button`
  bg-white px-4
`;

const BackButtonImage = tw.img`
  h-12
`;

const InputContainer = tw.div` 
  flex items-center
  px-4 mb-2
  bg-white
`;

const FromToIcons = tw.div` 
  flex flex-col items-center
  w-10 mr-2
`;

const From = tw.img` 
  h-2.5
`;

const Line = tw.img` 
  h-10
`;

const To = tw.img` 
  h-3
`;

const InputBox = tw.div`
  flex flex-1 flex-col
`;

const Input = tw.input`
  h-10 my-2 rounded-2 p-2
  bg-gray-200 outline-none border-none
`;

const PlusIcon = tw.img`
  w-10 h-10 rounded-full ml-3
  bg-gray-200
`;

const SavedPlaces = tw.div`
  flex items-center 
  px-4 py-2
  bg-white 
`;

const StarIcon = tw.img`
  w-10 h-10 p-2 rounded-full mr-2
  bg-gray-400
`;

const ConfirmButton = tw.button`
  flex items-center justify-center
  m-4 p-2
  text-xl text-white
   bg-black
`;
