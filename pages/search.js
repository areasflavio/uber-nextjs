import React from 'react';

import tw from 'tailwind-styled-components';

export default function Search() {
  return (
    <Container>
      <ButtonContainer>
        <BackButtonImage
          src="https://img.icons8.com/ios-filled/50/00000/left.png"
          alt="Back"
        />
      </ButtonContainer>

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
            src="https://img.icons8.com/windows/50/00000/rectangle.png"
            alt="To"
          />
        </FromToIcons>

        <InputBox>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBox>
      </InputContainer>
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
  flex
  bg-white
`;

const FromToIcons = tw.div` 
  flex flex-col
  w-10
`;

const From = tw.img` 

`;

const Line = tw.img` 

`;

const To = tw.img` 

`;

const InputBox = tw.div`
  flex flex-1 flex-col
`;

const Input = tw.input`
  h-10 my-2 rounded-2 p-2
  bg-gray-200 outline-none border-none
`;
