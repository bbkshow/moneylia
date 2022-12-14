import { Divider, Text, VStack } from 'native-base';
import React from 'react';

type Props = {
  title: string;
  details: string[];
  uppercase?: boolean;
};

export const PaymentDatailsItem: React.FC<Props> = ({
  title,
  details,
  uppercase,
}) => {
  return (
    <>
      <Divider bgColor="divider" />
      <VStack paddingY="14px">
        <Text
          fontSize={16}
          fontWeight={600}
          lineHeight={20}
          marginBottom="2px"
          color="text.neutralDark"
        >
          {title}
        </Text>
        {details.map((detail, index) => (
          <Text
            key={index}
            fontSize={16}
            lineHeight={19}
            textTransform={uppercase ? 'uppercase' : 'none'}
            color="text.neutralMedium"
          >
            {detail}
          </Text>
        ))}
      </VStack>
    </>
  );
};
