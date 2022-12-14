import React from 'react';
import { Center, Heading, Box } from 'native-base';
import { Image } from 'react-native';
import { Container } from '../../navigation/container';

export const ProfileScreen = () => {
  return (
    <Container bgColor="brand.secondary">
      <Center bg="white" height="100%" paddingBottom={20}>
        <Image source={require('../../assets/images/join-screen-image.png')} />
        <Box maxW={250}>
          <Heading
            fontWeight={600}
            fontSize={32}
            lineHeight={38}
            textAlign="center"
            color="text.main"
          >
            Your ad could be here
          </Heading>
        </Box>
      </Center>
    </Container>
  );
};
